
const projectData = {
    sportcentrum: {
        title: "Sportcentrum Webapplicatie",
        text: "Een webapplicatie voor een sportcentrum, gebouwd met Laravel en Blade-templates. Het project gebruikt een database en besteedt aandacht aan veilig ontwikkelen.",
        skills: ["Laravel", "PHP", "Blade", "Database", "Security"],
        url: "https://github.com/NikitaMSK/sportcentrum_pra"
    },
    "open-dag": {
        title: "Curio Open Dag Website",
        text: "Een responsive frontendproject voor de Curio Open Dag, gebouwd met HTML, CSS en JavaScript. Dit portfolio is zelf een doorontwikkeling van dat project.",
        skills: ["HTML", "CSS", "JavaScript", "Responsive"],
        url: "https://github.com/NikitaMSK/Open-Dag-Website"
    },
    teamproject: {
        title: "Teamproject Webapplicatie",
        text: "Een webapplicatie ontwikkeld met PHP en MySQL. Samenwerken, taken afstemmen en code beheren met Git maakten deel uit van het project.",
        skills: ["PHP", "MySQL", "Git", "Samenwerken"],
        url: "https://github.com/NikitaMSK/nikta-rayan-finn-b2"
    },
    registratie: {
        title: "Registratiesysteem",
        text: "Een registratiesysteem in C# of Python dat backendlogica en algoritmisch denken laat zien.",
        skills: ["C#", "Python", "Backend", "Algoritmes"],
        url: "https://github.com/NikitaMSK?tab=repositories",
        linkText: "Bekijk mijn GitHub →"
    }
};


const modal = document.getElementById("projectModal");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");
const modalSkills = document.getElementById("modalSkills");
const modalClose = document.getElementById("modalClose");
const modalLink = document.getElementById("modalLink");

const projectButtons = document.querySelectorAll(".project-button");


projectButtons.forEach(button => {

    button.addEventListener("click", () => {

        const project = projectData[button.dataset.project];

        if (!project) {
            return;
        }

        modalTitle.textContent = project.title;
        modalText.textContent = project.text;
        modalLink.href = project.url;
        modalLink.textContent = project.linkText || "Bekijk code op GitHub →";

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

    const subject = encodeURIComponent("Bericht via mijn portfolio");
    const body = encodeURIComponent(question);

    window.location.href = `mailto:nikiperetz10@gmail.com?subject=${subject}&body=${body}`;
});

questionInput.addEventListener("input", () => {
    questionInput.setCustomValidity("");
});