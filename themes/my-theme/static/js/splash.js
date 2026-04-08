document.addEventListener("DOMContentLoaded", function () {
    const bg = document.getElementById("landing-bg");
    const title = document.getElementById("landing-title");
    const date = document.getElementById("landing-date");
    const button = document.getElementById("landing-button");
    const nodes = document.querySelectorAll(".landing-item");
    const medium = document.getElementById("landing-medium");

    if (!bg || !button || nodes.length === 0) return;

    const items = Array.from(nodes).map((node) => ({
        image: node.dataset.image,
        project: node.dataset.project,
        title: node.dataset.title,
        date: node.dataset.date,
        medium: node.dataset.medium,
    }));

    const selected = items[Math.floor(Math.random() * items.length)];
    if (!selected) return;

    bg.style.backgroundImage = `url("${selected.image}")`;
    button.href = selected.project;

    if (title) {
        title.textContent = selected.title || "";
    }

    if (date) {
        date.textContent = selected.date || "";
    }
    if (medium) {
        medium.textContent = selected.medium || "";
    }

});