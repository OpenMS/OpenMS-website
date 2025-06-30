let selectedTags = {};
let allItems = [];

// Fetch the tools data
fetch('/data/tools.json')
    .then(response => {
        if (!response.ok) throw new Error("Network response was not ok");
        return response.json();
    })
    .then(data => {
        allItems = data;
        renderCategoryButtons();
        renderTagButtons();
        renderItems();
    })
    .catch(error => {
        console.error("Failed to fetch data:", error);
    });

// Create category buttons dynamically
function renderCategoryButtons() {
    const container = document.getElementById("category-buttons");
    container.innerHTML = "";

    const categories = new Set(["All"]);
    allItems.forEach(app => categories.add(app.category));

    categories.forEach(category => {
        const button = document.createElement("button");
        button.textContent = category;
        button.addEventListener("click", (event) => setCategory(event, category));
        container.appendChild(button);
    });
}

// Render tag buttons and also populate search suggestions
function renderTagButtons() {
    const tagContainer = document.getElementById("tag-buttons");
    tagContainer.innerHTML = "";
    const uniqueTags = new Set();
    const toolNames = new Set();

    allItems.forEach(app => {
        // Collect tags
        if (Array.isArray(app.tags)) {
            app.tags.forEach(tag => uniqueTags.add(tag));
        }

        // Collect tool names
        if (app.name) {
            toolNames.add(app.name);
        }
    });

    // Sort alphabetically
    const sortedTags = Array.from(uniqueTags).sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));
    const sortedToolNames = Array.from(toolNames).sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));

    // Render tag buttons
    sortedTags.forEach(tag => {
        const button = document.createElement("button");
        button.textContent = "+ " + tag;
        button.className = "tag-button";
        button.dataset.tag = tag;
        button.setAttribute("data-tag-button", tag);
        button.addEventListener("click", () => toggleTag(button, tag));
        tagContainer.appendChild(button);
    });

    // Populate the tool name suggestions in the datalist
    const suggestionContainer = document.getElementById("tag-suggestions");
    suggestionContainer.innerHTML = ""; // Clear old suggestions

    sortedToolNames.forEach(name => {
        const option = document.createElement("option");
        option.value = name;
        suggestionContainer.appendChild(option);
    });

    // Add reset button listener
    const resetBtn = document.getElementById("reset-tags");
    if (resetBtn) {
        resetBtn.addEventListener("click", resetTags);
    }
}


// Render items
function renderItems() {
    const container = document.getElementById("item-list");
    container.innerHTML = "";

    allItems.forEach(app => {
        const item = document.createElement("div");
        item.className = "item";
        item.setAttribute("data-category", app.category);
        item.setAttribute("data-tags", app.tags.join(","));
        item.setAttribute("data-url", app.url);

        const tagsHTML = app.tags.map(tag => {
            let tagClass = "entry-tag";
            let tagSymbol = "+";
            if (selectedTags[tag] === "positive") {
                tagClass += " positive";
                tagSymbol = "-";
            } else if (selectedTags[tag] === "negative") {
                tagClass += " negative";
                tagSymbol = "×";
            }
            return `<span class="${tagClass}" data-tag="${tag}">${tagSymbol} ${tag}</span>`;
        }).join("");

        const tagSpans = item.querySelectorAll('.entry-tag');
        tagSpans.forEach(span => {
            span.addEventListener("click", (e) => {
                e.stopPropagation(); // Prevent redirect
                const tag = span.getAttribute("data-tag");
                toggleTag(null, tag); // Pass null since it's not a button
            });
        });

        item.innerHTML = `
            <div class="item-content">
                <strong>${app.name}</strong> (v${app.version})
                <p class="item-description">${app.description || ''}</p>
                <div class="entry-tags">${tagsHTML}</div>
            </div>
            <span class="item-category ${app.category}">${app.category}</span>
        `;

        // Click on item redirects unless a tag is clicked
        item.style.cursor = "pointer";
        item.addEventListener("click", (e) => {
            // If a tag span was clicked, don't follow the URL
            if (e.target.classList.contains("entry-tag")) return;
            window.open(app.url, "_blank");
        });

        // Add event listeners to tags inside the item
        const tagElements = item.querySelectorAll(".entry-tag");
        tagElements.forEach(tagEl => {
            const tag = tagEl.dataset.tag;
            tagEl.style.cursor = "pointer";
            tagEl.addEventListener("click", (e) => {
                e.stopPropagation(); // Prevent item click
                // Find corresponding global tag button
                const tagButton = document.querySelector(`.tag-button[data-tag="${tag}"]`);
                if (tagButton) toggleTag(tagButton, tag); // Update button style
                else toggleTag(tagEl, tag); // Fallback if tag is only shown inside
            });
        });

        container.appendChild(item);
    });

    window.filterItems();
}

// Handle tag toggle
window.toggleTag = function(buttonElement, tag) {
    const allButtons = document.querySelectorAll(`[data-tag-button="${tag}"]`);
    const allSpans = document.querySelectorAll(`.entry-tag[data-tag="${tag}"]`);

    if (!selectedTags[tag]) {
        selectedTags[tag] = "positive";
        allButtons.forEach(btn => {
            btn.classList.add("positive");
            btn.classList.remove("negative");
            btn.textContent = "- " + tag;
        });
        allSpans.forEach(span => {
            span.classList.add("positive");
            span.classList.remove("negative");
            span.textContent = "- " + tag;
        });
    } else if (selectedTags[tag] === "positive") {
        selectedTags[tag] = "negative";
        allButtons.forEach(btn => {
            btn.classList.remove("positive");
            btn.classList.add("negative");
            btn.textContent = "× " + tag;
        });
        allSpans.forEach(span => {
            span.classList.remove("positive");
            span.classList.add("negative");
            span.textContent = "× " + tag;
        });
    } else {
        delete selectedTags[tag];
        allButtons.forEach(btn => {
            btn.classList.remove("positive", "negative");
            btn.textContent = "+ " + tag;
        });
        allSpans.forEach(span => {
            span.classList.remove("positive", "negative");
            span.textContent = "+ " + tag;
        });
    }

    filterItems();
};


// Handle category selection
window.setCategory = function (event, category) {
    document.querySelectorAll(".category-select button").forEach(btn => btn.style.background = "#3498db");
    event.target.style.background = "#2980b9";
    document.getElementById("item-list").setAttribute("data-category", category);
    filterItems();
};

// Reset tag filters
function resetTags() {
    selectedTags = {};
    document.querySelectorAll("#tag-buttons button").forEach(btn => {
        btn.classList.remove("positive", "negative");
        const tag = btn.textContent.slice(2);
        btn.textContent = "+ " + tag;
    });
    filterItems();
}

// Filtering logic
window.filterItems = function () {
    let searchQuery = document.getElementById("search").value.toLowerCase();
    let categoryFilter = document.getElementById("item-list").getAttribute("data-category") || "All";
    let matchCount = 0;

    const positiveTags = Object.entries(selectedTags)
        .filter(([_, status]) => status === "positive")
        .map(([tag]) => tag);

    const negativeTags = Object.entries(selectedTags)
        .filter(([_, status]) => status === "negative")
        .map(([tag]) => tag);

    document.querySelectorAll(".item").forEach(item => {
        const itemText = item.textContent.toLowerCase();
        const itemCategory = item.getAttribute("data-category");
        const itemTags = item.getAttribute("data-tags").split(",");

        const matchesSearch = itemText.includes(searchQuery);
        const matchesCategory = (categoryFilter === "All" || itemCategory === categoryFilter);
        const matchesPositive = (positiveTags.length === 0) || positiveTags.some(tag => itemTags.includes(tag));
        const matchesNegative = !negativeTags.some(tag => itemTags.includes(tag));
        const matchesTags = matchesPositive && matchesNegative;

        const show = matchesSearch && matchesCategory && matchesTags;
        item.style.display = show ? "block" : "none";
        if (show) matchCount++;
    });

    document.getElementById("match-count").textContent = `${matchCount} match${matchCount !== 1 ? 'es' : ''} found`;
};
