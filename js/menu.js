const menuBars = document.getElementById("menuBars");
const ul = document.querySelector(".menu");
const links = document.querySelectorAll(".liLink");

menuBars.addEventListener("click", () => {
    ul.classList.toggle("show");
});

links.forEach((link) => {
    link.addEventListener("click", () => {
        ul.classList.remove("show");
  
    });
});
