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
});

var swiper = new Swiper(".swip", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 10,
    },
  },
});
