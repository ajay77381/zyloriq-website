/* ==========================================
   ZYLORIQ WEBSITE
   script.js
========================================== */

/* ==========================
   Sticky Header Shadow
========================== */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow = "0 8px 25px rgba(0,0,0,.08)";

    } else {

        header.style.boxShadow = "none";

    }
});


/* ==========================
   Scroll To Top Button
========================== */

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.className = "scroll-top";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.right = "30px";
topBtn.style.bottom = "30px";
topBtn.style.width = "50px";
topBtn.style.height = "50px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.background = "#2563EB";
topBtn.style.color = "#fff";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.fontSize = "20px";
topBtn.style.zIndex = "9999";


window.addEventListener("scroll", () => {

    if (window.pageYOffset > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});


topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/* ==========================
   Fade-in Animation
========================== */

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll("section").forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});


/* ==========================
   Active Navigation
========================== */

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


/* ==========================
   Console Message
========================== */

console.log("Zyloriq JavaScript Loaded Successfully");

/* ==========================
   FAQ Accordion
========================== */

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {

        faqItems.forEach(faq => {

            if(faq !== item){

                faq.classList.remove("active");

            }

        });

        item.classList.toggle("active");

    });

});

document.getElementById("year").textContent = new Date().getFullYear();

/* ==========================
   Contact Form - EmailJS
========================== */

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const submitBtn = document.getElementById("submitBtn");

        submitBtn.disabled = true;
        submitBtn.innerHTML = "Sending...";

        emailjs.sendForm(
            "service_29il4mo",
            "template_4h3mqto",
            this
        )
        .then(() => {

            alert("✅ Thank you! Your message has been sent successfully.");

            contactForm.reset();

            submitBtn.disabled = false;
            submitBtn.innerHTML = "Send Message";

        })
        .catch((error) => {

            console.error("EmailJS Error:", error);

            alert("❌ Failed to send message. Please try again.");

            submitBtn.disabled = false;
            submitBtn.innerHTML = "Send Message";

        });

    });

}