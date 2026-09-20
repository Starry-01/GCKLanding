/* =========================
   LOADING SCREEN
========================= */

const loadingScreen =
    document.querySelector("#loading-screen");

document.body.classList.add("loading");


window.addEventListener("load", () => {

    setTimeout(() => {

        if (loadingScreen) {

            loadingScreen.classList.add("hidden");

        }

        document.body.classList.remove("loading");

    }, 1000);

});


/* =========================
   MOBILE MENU
========================= */

const menuButton =
    document.querySelector(".menu-button");

const mobileMenu =
    document.querySelector(".mobile-menu");

const mobileLinks =
    document.querySelectorAll(".mobile-menu a");


if (menuButton && mobileMenu) {

    menuButton.addEventListener("click", () => {

        mobileMenu.classList.toggle("active");

    });

}


mobileLinks.forEach((link) => {

    link.addEventListener("click", () => {

        mobileMenu.classList.remove("active");

    });

});


/* =========================
   NAVBAR ON SCROLL
========================= */

const navbar =
    document.querySelector(".navbar");


if (navbar) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            navbar.classList.add("scrolled");

        } else {

            navbar.classList.remove("scrolled");

        }

    });

}


/* =========================
   SCROLL REVEAL
========================= */

const revealElements =
    document.querySelectorAll(
        ".section, .project-card, .philosophy, .service-item, .contact"
    );


revealElements.forEach((element) => {

    element.classList.add("reveal");

});


const revealObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (!entry.isIntersecting) {
                    return;
                }


                entry.target.classList.add("visible");


                revealObserver.unobserve(
                    entry.target
                );

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach((element) => {

    revealObserver.observe(element);

});


/* =========================
   HERO IMAGE MOVEMENT
========================= */

const hero =
    document.querySelector(".hero");

const heroImage =
    document.querySelector(".hero-image");


if (hero && heroImage) {

    hero.addEventListener(
        "mousemove",
        (event) => {

            const rect =
                hero.getBoundingClientRect();


            const x =
                (event.clientX - rect.left) /
                rect.width -
                0.5;


            const y =
                (event.clientY - rect.top) /
                rect.height -
                0.5;


            heroImage.style.transform =
                `translate(
                    ${x * 6}px,
                    ${y * 6}px
                )`;

        }
    );


    hero.addEventListener(
        "mouseleave",
        () => {

            heroImage.style.transform =
                "translate(0, 0)";

        }
    );

}


/* =========================
   PROJECT IMAGE HOVER
========================= */

const projectCards =
    document.querySelectorAll(".project-card");


projectCards.forEach((card) => {

    card.addEventListener(
        "mouseenter",
        () => {

            card.classList.add("hovered");

        }
    );


    card.addEventListener(
        "mouseleave",
        () => {

            card.classList.remove("hovered");

        }
    );

});


/* =========================
   FOOTER YEAR
========================= */

const footerYear =
    document.querySelector(".footer-year");


if (footerYear) {

    footerYear.textContent =
        new Date().getFullYear();

}


/* =========================
   SMOOTH ANCHOR LINKS
========================= */

const anchorLinks =
    document.querySelectorAll(
        'a[href^="#"]'
    );


anchorLinks.forEach((link) => {

    link.addEventListener(
        "click",
        (event) => {

            const targetId =
                link.getAttribute("href");


            if (
                !targetId ||
                targetId === "#"
            ) {
                return;
            }


            const target =
                document.querySelector(targetId);


            if (target) {

                event.preventDefault();


                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        }
    );

});