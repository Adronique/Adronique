// Global Variables
const navigation = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');

// Build the navigation bar dynamically
const createNavBar = () => {
  let navHTML = '';
  sections.forEach(section => {
    const sectionID = section.id;
    const sectionDataNav = section.dataset.nav;
    navHTML += `<li><a class="menu__link" href="#${sectionID}">${sectionDataNav}</a></li>`;
  });
  navigation.innerHTML = navHTML;
};

createNavBar();

// Helper function to get offset from the top of the section
const getOffset = (section) => {
  return Math.floor(section.getBoundingClientRect().top);
};

// Adding 'active' class to the section in the viewport
const removeActiveClass = (section) => {
  section.classList.remove('your-active-class');
  section.style.cssText = "background-color: linear-gradient(0deg, rgba(255,204,255,.1) 0%, rgba(255,204,255,.2) 100%)";
};

const addActiveClass = (condition, section) => {
  if (condition) {
    section.classList.add('your-active-class');
    section.style.cssText = "background-color: pink;";
  }
};

const activateSection = () => {
  sections.forEach(section => {
    const elementOffset = getOffset(section);
    const inViewport = () => elementOffset < 150 && elementOffset >= -150;
    removeActiveClass(section);
    addActiveClass(inViewport(), section);
  });
};

window.addEventListener('scroll', activateSection);

// use scrollTO event
const scrollToSection = () => {
  const links = document.querySelectorAll('.navbar__menu a');
  links.forEach(link => {
    link.addEventListener('click', () => {
      for (let i = 0; i < sections.length; i++) {
        sections[i].addEventListener("click", () => {
          const sectionID = link.getAttribute('href');
          const targetSection = document.querySelector(sectionID);
          targetSection.scrollIntoView({ behavior: "smooth" });
        });
      }
    });
  });
};

scrollToSection();
