const projects = [[".osu_container", "popinfromleft"], [".wordle_container", "popinfromright"], [".grouplearn_container", "popinfromleft"], [".weather_container", "popinfromright"]];

const scrolldelay = 100;
const buffer = 0; // Buffer in pixels
let shouldRemoveAnimation = true; // Variable to determine whether to remove animation

projects.forEach(([selector, className]) => {
  const element = document.querySelector(selector);

  window.addEventListener('scroll', () => {
    const elementTop = element.getBoundingClientRect().top - buffer;
    const elementBottom = element.getBoundingClientRect().bottom + scrolldelay + buffer;
    const isVisible = (elementTop >= 0) && (elementBottom <= window.innerHeight);
    const isTooHigh = (elementBottom > window.scrollY + window.innerHeight);

    if (isVisible) {
      element.classList.add(className);
      shouldRemoveAnimation = false; // Set shouldRemoveAnimation to false when animation is added
    }
  });
});

const wordleTextElements = document.querySelectorAll(".wordle_text");
const rotationClasses = ["yellowrotate", "yellowrotate", "yellowrotate", "yellowrotate", "yellowrotate", "yellowrotate", "yellowrotate", "yellowrotate", "yellowrotate", "yellowrotate", "yellowrotate", "greenrotate"];

window.addEventListener("scroll", () => {
  wordleTextElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top - buffer;
    const elementBottom = element.getBoundingClientRect().bottom + 40 + buffer;
    const isVisible = (elementTop >= 0) && (elementBottom <= window.innerHeight);

    if (isVisible) {
      const rotationClass = rotationClasses[Math.floor(Math.random() * rotationClasses.length)];
      element.classList.add(rotationClass);
      shouldRemoveAnimation = false;
    } else if (shouldRemoveAnimation) {
      element.classList.remove(...rotationClasses);
    }
  });
});

const mainTitleElements = document.querySelectorAll(".main_title");

window.addEventListener('scroll', () => {
  mainTitleElements.forEach((mainTitle) => {
    const scrollY = window.scrollY;
    const opacity = 1 - (scrollY / 200);

    mainTitle.style.opacity = opacity < 0 ? 0 : opacity;
  });
});
