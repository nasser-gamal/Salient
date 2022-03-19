// landing
let text = document.querySelectorAll(".landing .text");
let count = 0;

setInterval(() => {
  removeTextClasses();
  text[count].classList.add("active");
  count++;
  if (count == text.length) {
    count = 0;
  }
}, 3000);

function removeTextClasses() {
  text.forEach((tex) => {
    tex.classList.remove("active");
  });
}

// Skills Progress And ScrollTop
let skills = document.querySelector(".skills .skill-prog");
let progress = document.querySelectorAll(".skills .prog > span span");

let scrolling = document.querySelector(".scroll-top");

scrolling.onclick = () => {
  scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

window.addEventListener(("load"), () => {
  AOS.init();
})

window.addEventListener("scroll", () => {
  if (scrollY >= skills.offsetTop - 650) {
    progress.forEach((prog) => {
      prog.style.width = prog.dataset.width;
    });
  };
})

