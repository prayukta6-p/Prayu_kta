// ==============================
// 1. MOBILE NAVIGATION
// ==============================

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {

    const isOpen = navMenu.classList.toggle("open");

    menuToggle.setAttribute(
        "aria-expanded",
        String(isOpen)
    );

    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation" : "Open navigation"
    );

    menuToggle.textContent = isOpen ? "✕" : "☰";

});


// ==============================
// 2. CLOSE MENU AFTER CLICKING
// A NAVIGATION LINK
// ==============================

navMenu.querySelectorAll("a").forEach((link) => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("open");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

        menuToggle.setAttribute(
            "aria-label",
            "Open navigation"
        );

        menuToggle.textContent = "☰";

    });

});


// ==============================
// 3. AUTOMATIC COPYRIGHT YEAR
// ==============================

document.getElementById("year").textContent =
    new Date().getFullYear();


// ==============================
// 4. CONTACT BUTTON
// ==============================

// Replace this example address with your own email.

const emailButton = document.getElementById("emailButton");

emailButton.href =
    "mailto:hello@example.com?subject=Hello%20Prayukta";