
const projectData = {
    web: {
        title: "Web Development",

        image: "img/projects/web-development.png",

        alt: "Developerland website met een takenlijst",

        text: "Tijdens dit project leer je hoe je een moderne website maakt. Je werkt met HTML, CSS en JavaScript. Je leert ook hoe je een website responsive maakt voor mobiel en desktop.",

        skills: ["HTML", "CSS", "JavaScript", "Responsive"]
    },

    python: {
        title: "Python",
        image:"img/projects/python.png",
        alt: "Python programmeercode",
        text: "Je leert programmeren met Python. Je werkt met variabelen, functies, loops en data. Je leert problemen oplossen door een programma stap voor stap te bouwen.",
        skills: ["Python", "Functies", "Loops", "Data"]
    },

    csharp: {
        title: "C# & Applications",
        image: "img/projects/csharp.png",
        alt: "Csharp programmeercode",
        text: "Je maakt een applicatie of game met C#. Je leert hoe je een interface bouwt, gebruikersinput verwerkt en verschillende functionaliteiten toevoegt.",
        skills: ["C#", "WPF", "WinUI", "Applications"]
    },

    database: {
        title: "Databases",
        image: "img/projects/database.jpg",
        alt: "Database",
        text: "Je leert gegevens opslaan en beheren in een database. Je ontdekt hoe programma's informatie kunnen opslaan, ophalen en gebruiken.",
        skills: ["Databases", "SQL", "Data", "Backend"]
    }
};


const modal = document.getElementById("projectModal");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");
const modalSkills = document.getElementById("modalSkills");
const modalClose = document.getElementById("modalClose");
const modalImage = document.getElementById("modalImage");

const projectButtons = document.querySelectorAll(".project-button");


projectButtons.forEach(button => {

    button.addEventListener("click", () => {

        const project = projectData[button.dataset.project];

        if (!project) {
            return;
        }

        modalTitle.textContent = project.title;
        modalText.textContent = project.text;

        modalImage.src = project.image;
        modalImage.alt = project.alt;

        modalSkills.innerHTML = "";

        project.skills.forEach(skill => {

            const span = document.createElement("span");

            span.textContent = skill;

            modalSkills.appendChild(span);

        });

        modal.classList.add("active");

        modalClose.focus();

    });

});


function closeModal() {
    modal.classList.remove("active");
}


modalClose.addEventListener("click", closeModal);


modal.addEventListener("click", event => {

    if (event.target === modal) {
        closeModal();
    }

});


document.addEventListener("keydown", event => {

    if (event.key === "Escape") {
        closeModal();
    }

});


/* MOBILE MENU */

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", () => {

    const isOpen = mainNav.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", isOpen);

});


/* Sluit mobiel menu na klikken op link */

mainNav.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {

        mainNav.classList.remove("open");

        menuToggle.setAttribute("aria-expanded", "false");

    });

});


/* CONTACT FORM */

const contactForm = document.getElementById("contactForm");
const questionInput = document.getElementById("question");

contactForm.addEventListener("submit", event => {

    event.preventDefault();

    const question = questionInput.value.trim();

    if (!question) {
        questionInput.setCustomValidity("Vul eerst je vraag in.");
        questionInput.reportValidity();
        return;
    }

    questionInput.setCustomValidity("");

    const subject = encodeURIComponent("Vraag over Software Development");
    const body = encodeURIComponent(question);

    window.location.href = `mailto:nikiperetz10@gmail.com?subject=${subject}&body=${body}`;

});

questionInput.addEventListener("input", () => {
    questionInput.setCustomValidity("");
});