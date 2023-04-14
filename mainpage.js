const projects = [[".osu_container", "popinfromleft"], [".wordle_container", "popinfromleft"], [".grouplearn_container", "popinfromleft"], [".weather_container", "popinfromleft"], [".ezsfinder_container", "popinfromleft"]]

const scrolldelay = 0;
const buffer = 0; // Buffer in pixels
let shouldRemoveAnimation = true; // Variable to determine whether to remove animation

projects.forEach(([selector, className]) => {
  const element = document.querySelector(selector);

  window.addEventListener('scroll', () => {
    const elementTop = element.getBoundingClientRect().top - buffer;
    const elementBottom = element.getBoundingClientRect().bottom + buffer;
    const isVisible = (elementTop >= 0) && (elementBottom <= window.innerHeight);
    const isTooHigh = (elementBottom + scrolldelay > window.scrollY + window.innerHeight);

    if (isVisible) {
      element.classList.add(className);
      shouldRemoveAnimation = false; // Set shouldRemoveAnimation to false when animation is added
    }
    if (isTooHigh) { // Check if shouldRemoveAnimation is true
      element.classList.remove(className);
    }
  });
});

var outerCircle = document.getElementById('outerCircle');
var innerCircle = document.getElementById('innerCircle');


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

var ezsfinderContent1 = document.querySelector('.ezsfinder_content1');

var text1 = `bruh\ns`
var text2 = "bruh2"

speed = 100;

// Function to simulate typing effect
function typeEffect1() {
  var index = 0;
  var intervalId = setInterval(function() {
    ezsfinderContent1.textContent = text1.slice(0, index);
    index ++ ;
    if (index > text1.length) {
      clearInterval(intervalId);
    }
  }, speed);
}

shouldrun1 = true

window.addEventListener('scroll', () => {
  const elementTop = ezsfinderContent1.getBoundingClientRect().top - buffer;
  const elementBottom = ezsfinderContent1.getBoundingClientRect().bottom + scrolldelay + buffer;
  const isVisible = (elementTop >= 0) && (elementBottom <= window.innerHeight);
  const isTooHigh = (elementBottom > window.scrollY + window.innerHeight);

  if (isVisible && shouldrun1 == true) {
    typeEffect1();
    shouldrun1 = false
  }
  if(isTooHigh) {
    shouldrun1 = true
  }
});

var ezsfinderContent2 = document.querySelector('.ezsfinder_content2');

var text1 = "Ezsfinder, a tool that makes tetris research easy"
var text2 = "Still in a command line tho lol"

speed = 100;

// Function to simulate typing effect
function typeEffect2() {
  var index = 0;
  var intervalId = setInterval(function() {
    ezsfinderContent2.textContent = text2.slice(0, index);
    index ++ ;
    if (index > text2.length) {
      clearInterval(intervalId);
    }
  }, speed);
}

shouldrun2 = true;

window.addEventListener('scroll', () => {
  const elementTop = ezsfinderContent2.getBoundingClientRect().top - buffer;
  const elementBottom = ezsfinderContent2.getBoundingClientRect().bottom+ buffer;
  const isVisible = (elementTop >= 0) && (elementBottom + scrolldelay<= window.innerHeight);
  const isTooHigh = (elementBottom > window.scrollY + window.innerHeight);

  if (isVisible && shouldrun2 == true) {
    typeEffect2();
    shouldrun2 = false
  }
  if(isTooHigh) {
    shouldrun2 = true
  }
});
