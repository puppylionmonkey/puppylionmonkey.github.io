// navbar-loader.js
const navbarHTML = await (await fetch("navbar.html")).text();
const footerHTML = await (await fetch("footer.html")).text();

document.getElementById("navbar-placeholder").innerHTML = navbarHTML;
document.getElementById("footer-placeholder").innerHTML = footerHTML;

// 等插入完成再綁定事件
await new Promise(resolve => setTimeout(resolve, 0));

const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");
if (toggle && menu) {
  toggle.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });
}
