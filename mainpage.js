const projects = [[".osu_container", "popinfromleft"], [".wordle_container", "popinfromleft"], [".grouplearn_container", "popinfromleft"], [".weather_container", "popinfromleft"], [".ezsfinder_title1", "ezsfinder_content1"]];

const scrolldelay = 300;
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

const wordleTextElements = document.querySelectorAll(".wordle_text");

goal = "thisistest";

if(Math.random() * 100 < 99) { //RNG!
  goal = "wordlesolver";
} else {
  goal = "Lbadatcoding" 
}
//I expect you to find this, but if you don't I am gonna laugh my head off. Also credit to @enhancedrobot (me)

function debounce(func, delay) {
  let timer;
  return function() {
    clearTimeout(timer);
    timer = setTimeout(func, delay);
  }
} //Copy paste from ChatGPT which probably took it off stack overflow because what else would it take it off of :l


//Yeah I basically rewrote everything what do you plan to do about it
const handleWordleScroll = debounce(() => {
  wordleTextElements.forEach((element, index) => {
    if (!element.classList.contains("greenrotate")) {

    element.classList.remove("yellowrotate", "blackrotate");
    
    const elementTop = element.getBoundingClientRect().top - buffer;
    const elementBottom = element.getBoundingClientRect().bottom + 40 + buffer;
    const isVisible = (elementTop >= 0) && (elementBottom <= window.innerHeight);

    if (isVisible) {
      if(Math.random() * 10 < 9) { //Chant it with me now... RNG! RNG! RNG! RNG!
        randomIndex = Math.floor(Math.random() * 26);
        randomLetter = String.fromCharCode(97+randomIndex);
      } else {
        randomLetter = goal[index]
      }

      if(randomLetter == goal[index]) {
        const rotationClass = "greenrotate"
        element.classList.add(rotationClass);

        element.textContent = randomLetter;
      } else {
        if(goal.includes(randomLetter)) {
          rotationClass = "yellowrotate"
        } else {
          rotationClass = "blackrotate"
        }
        element.classList.add(rotationClass);
        shouldRemoveAnimation = false;
        
        element.textContent = randomLetter;
      }
    }
    }
  });
}, 100); // the 100 here is the delay in millis


window.addEventListener("scroll", handleWordleScroll);

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

  if (isVisible && shouldrun1) {
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

shouldrun2 = true

window.addEventListener('scroll', () => {
  const elementTop = ezsfinderContent2.getBoundingClientRect().top - buffer;
  const elementBottom = ezsfinderContent2.getBoundingClientRect().bottom+ buffer;
  const isVisible = (elementTop >= 0) && (elementBottom + scrolldelay<= window.innerHeight);
  const isTooHigh = (elementBottom > window.scrollY + window.innerHeight);

  if (isVisible && shouldrun2) {
    typeEffect2();
    shouldrun2 = false
  }
  if(isTooHigh) {
    shouldrun2 = true
  }
});
