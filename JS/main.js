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

let infoText = document.querySelector(".information .text");
infoRow = document.querySelector(".information .row");
ProjText = document.querySelector(".projects .special-content");
video = document.querySelector(".video");
teamText = document.querySelector(".team .special-content");
services = document.querySelector(".services");
design = document.querySelector(".design");
creative = document.querySelector(".creative");
galleryText = document.querySelector(".gallery .special-content");
clients = document.querySelector(".client"); 
priceText = document.querySelector(".price .special-content"); 
contactText = document.querySelector(".contact .special-content"); 


window.addEventListener("scroll", () => {

    if (scrollY >= document.querySelector(".information").offsetTop + 300) {
      scrolling.style.display = "block";
    } else {
      scrolling.style.display = "none";
    }
    if (scrollY >= infoText.offsetTop - 600) {
      infoText.style.transform = "translateY(0)"
      infoText.style.opacity = "1"
    }
    if (scrollY >= infoRow.offsetTop - 600) {
      infoRow.style.transform = "translateY(0)"
      infoRow.style.opacity = "1"
    }
    if (scrollY >= ProjText.offsetTop - 600) { 
      ProjText.style.transform = "translateY(0)"
      ProjText.style.opacity = "1"
    }
    if (scrollY >= ProjText.offsetTop - 200) { 
      document.querySelector(".projects .right").style.transform = "translateX(0)"
      document.querySelector(".projects .right").style.opacity = "1"
    }
    if (scrollY >= ProjText.offsetTop - 200) { 
      document.querySelector(".projects .center").style.transform = "translateY(0)"
      document.querySelector(".projects .center").style.opacity = "1"
    }
    if (scrollY >= ProjText.offsetTop - 200) { 
      document.querySelector(".projects .left").style.transform = "translateX(0)"
      document.querySelector(".projects .left").style.opacity = "1"
    }
    if (scrollY >= video.offsetTop - 400) { 
      video.style.transform = "translateY(0)"
      video.style.opacity = "1"
    }
    if (scrollY >= teamText.offsetTop - 500) { 
      teamText.style.transform = "translateY(0)"
      teamText.style.opacity = "1"
    }
    if (scrollY >= teamText.offsetTop - 200) { 
      document.querySelector(".team .left").style.transform = "translateX(0)"
      document.querySelector(".team .left").style.opacity = "1"
    }
    if (scrollY >= teamText.offsetTop - 200) { 
      document.querySelector(".team .center").style.transform = "translateY(0)"
      document.querySelector(".team .center").style.opacity = "1"
    }
    if (scrollY >= teamText.offsetTop - 200) { 
      document.querySelector(".team .right").style.transform = "translateX(0)"
      document.querySelector(".team .right").style.opacity = "1"
  }
  if (scrollY >= skills.offsetTop - 350) {
    progress.forEach((prog) => {
      prog.style.width = prog.dataset.width;
    });
    if (scrollY >= services.offsetTop - 450) {
      services.style.transform = "translateX(0)"
      services.style.opacity = "1"
    }
    if (scrollY >= design.offsetTop - 350) {
      document.querySelector(".design .left").style.transform = "translateX(0)"
      document.querySelector(".design .left").style.opacity = "1"
    }
    if (scrollY >= design.offsetTop - 350) {
      document.querySelector(".design .right").style.transform = "translateX(0)"
      document.querySelector(".design .right").style.opacity = "1"
    }
    if (scrollY >= creative.offsetTop - 250) {
      document.querySelector(".creative .left").style.transform = "translateX(0)"
      document.querySelector(".creative .left").style.opacity = "1"
    }
    if (scrollY >= design.offsetTop - 250) {
      document.querySelector(".creative .right").style.transform = "translateX(0)"
      document.querySelector(".creative .right").style.opacity = "1"
    }
    if (scrollY >= galleryText.offsetTop + 500) {
      galleryText.style.transform = "translateY(0)"
      galleryText.style.opacity = "1"
    }
    if (scrollY >= clients.offsetTop - 600) {
      clients.style.transform = "translateY(0)"
      clients.style.opacity = "1"
    }
    if (scrollY >= priceText.offsetTop - 600) {
      priceText.style.transform = "translateY(0)"
      priceText.style.opacity = "1"
    }
    if (scrollY >= priceText.offsetTop - 350) {
      document.querySelector(".price .right").style.transform = "translateX(0)"
      document.querySelector(".price .right").style.opacity = "1"
    }
    if (scrollY >= priceText.offsetTop - 250) {
      document.querySelector(".price .center").style.transform = "translateY(0)"
      document.querySelector(".price .center").style.opacity = "1"
    }
    if (scrollY >= priceText.offsetTop - 250) {
      document.querySelector(".price .left").style.transform = "translateY(0)"
      document.querySelector(".price .left").style.opacity = "1"
    }
    if (scrollY >= contactText.offsetTop - 600) {
      contactText.style.transform = "translateY(0)"
      contactText.style.opacity = "1"
    }
  };
})

window.onscroll = () => {
 
}