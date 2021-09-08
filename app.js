const culturePic = document.querySelector(".slideshow");
const items = document.querySelector(".nav-items");
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
const college = document.querySelector(".college");
const hideLogo = document.querySelector(".hide");
const navBar = document.querySelector(".nav-bar");
const landed = document.querySelector(".landed");
const individual = document.querySelectorAll(".scroll-link");

var i = -1;

navToggle.addEventListener("click", () => {
  items.classList.toggle("show-items");
  const containerHeight = items.getBoundingClientRect().height;
  const linkHeight = links.getBoundingClientRect().height;

  if (containerHeight === 0) {
    items.style.height = `${linkHeight}px`;
  } else {
    items.style.height = 0;
  }
});

window.addEventListener("scroll", () => {
  if (window.scrollY >= college.offsetTop) {
    hideLogo.style.visibility = "visible";
  } else if (window.scrollY < college.offsetTop) {
    hideLogo.style.visibility = "hidden";
  }
});

window.addEventListener("scroll", () => {
  if (window.scrollY >= landed.offsetHeight - 5) {
    navBar.style.background = "white";
    navBar.style.boxShadow = "0px 3px 10px 0px rgba(0, 0, 0, 0.75)";

    individual.forEach((ele) => {
      ele.style.color = "black";
    });
  } else if (window.scrollY < landed.offsetHeight) {
    navBar.style.background = "transparent";
    navBar.style.boxShadow = "none";

    individual.forEach((ele) => {
      ele.style.color = "white";
    });
  }
});

const scrollLink = document.querySelectorAll(".scroll-link");

scrollLink.forEach(function (link) {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    let position = element.offsetTop;
    window.scrollTo({
      left: 0,
      top: position - navBar.getBoundingClientRect().height,
    });

    // items.style.height = 0;
  });
});
