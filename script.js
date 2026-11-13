
/* =====================================
   PIXELBYAWAIS - PIXELORA STUDIO
   JAVASCRIPT
===================================== */


/* MOBILE NAVIGATION */

const menuToggle = document.getElementById("menuToggle");

const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.innerHTML = isOpen
        ? '<i class="fa-solid fa-xmark"></i>'
        : '<i class="fa-solid fa-bars"></i>';

});


/* CLOSE MENU AFTER CLICKING A LINK */

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(function (item) {

    item.addEventListener("click", function () {

        navLinks.classList.remove("open");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.innerHTML =
            '<i class="fa-solid fa-bars"></i>';

    });

});


/* PORTFOLIO FILTER SYSTEM */

const filterButtons = document.querySelectorAll(".filter-btn");

const portfolioItems = document.querySelectorAll(".portfolio-item");


filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        // Get selected category
        const selectedCategory = button.getAttribute("data-filter");


        // Remove active class from all buttons
        filterButtons.forEach(function (btn) {

            btn.classList.remove("active");

        });


        // Add active class to clicked button
        button.classList.add("active");


        // Filter portfolio projects
        portfolioItems.forEach(function (item) {

            const projectCategory =
                item.getAttribute("data-category");


            if (
                selectedCategory === "all" ||
                selectedCategory === projectCategory
            ) {

                item.classList.remove("hide");

            } else {

                item.classList.add("hide");

            }

        });

    });

});


/* AUTOMATIC COPYRIGHT YEAR */

const currentYear = document.getElementById("currentYear");

currentYear.textContent = new Date().getFullYear();


/* CONSOLE MESSAGE */

console.log(
    "Welcome to PixelByAwais | Pixelora Studio!"
);
