
// MOBILE NAVIGATION

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");

    menuBtn.setAttribute("aria-expanded", isOpen);

});


// CLOSE MOBILE MENU AFTER CLICKING A LINK

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("open");

        menuBtn.setAttribute("aria-expanded", "false");

    });

});


// PORTFOLIO FILTER

const filterButtons = document.querySelectorAll(".filter-btn");

const projects = document.querySelectorAll(".project[data-category]");

filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        // Remove active class from all buttons

        filterButtons.forEach(function (btn) {
            btn.classList.remove("active");
        });

        // Activate selected button

        button.classList.add("active");

        // Get selected category

        const selectedCategory = button.dataset.filter;

        // Show or hide portfolio projects

        projects.forEach(function (project) {

            const projectCategory = project.dataset.category;

            if (
                selectedCategory === "all" ||
                projectCategory === selectedCategory
            ) {

                project.classList.remove("hidden");

            } else {

                project.classList.add("hidden");

            }

        });

    });

});


// SCROLL ANIMATION

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.12
        }

    );

    revealElements.forEach(function (element) {

        observer.observe(element);

    });

} else {

    revealElements.forEach(function (element) {

        element.classList.add("visible");

    });

}


// AUTOMATIC COPYRIGHT YEAR

const yearElement = document.getElementById("year");

yearElement.textContent = new Date().getFullYear();
