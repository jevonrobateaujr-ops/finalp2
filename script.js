/* Dark Mode Toggle */
const toggleBtn = document.getElementById("theme-toggle");
toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    toggleBtn.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "☾";
});

/* Auto Year Update */
document.getElementById("year").textContent = new Date().getFullYear();

/* Slideshow */
let slideIndex = 0;
function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let s of slides) s.style.display = "none";

    slideIndex++;
    if (slideIndex > slides.length) slideIndex = 1;

    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2500);
}
showSlides();

/* Expandable Bio */
const expandBtn = document.querySelector(".expand-btn");
const expandableText = document.querySelector(".expandable");

if (expandBtn) {
    expandBtn.onclick = () => {
        if (expandableText.style.maxHeight === "300px") {
            expandableText.style.maxHeight = "90px";
            expandBtn.textContent = "Read More";
        } else {
            expandableText.style.maxHeight = "300px";
            expandBtn.textContent = "Show Less";
        }
    };
}

/* Contact Form Validation */
const form = document.getElementById("contact-form");
if (form) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        if (!name.value || !email.value || !message.value) {
            alert("⚠ Enter all fields like a true hacker.");
            return;
        }

        alert("✔ Message transmitted through the Matrix.");
        form.reset();
    });
}
