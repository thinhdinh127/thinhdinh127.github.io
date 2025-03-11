document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector(".container");
    const toggleBtn = document.getElementById("toggleBtn");
    const toggleBackBtn = document.getElementById("toggleBackBtn");

    toggleBtn.addEventListener("click", function() {
        container.classList.add("active");
    });

    toggleBackBtn.addEventListener("click", function() {
        container.classList.remove("active");
    });
});
