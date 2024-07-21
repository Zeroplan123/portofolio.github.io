function showbar() {
    let sidebar = document.querySelector(".menu-sidebar");
    sidebar.style.display = "flex";
    setTimeout(() => {
        sidebar.style.transform = "translateX(0)";
        sidebar.style.opacity = "1";
    }, 10); // small delay to ensure the display property is set before transition
}

function hidebar() {
    let hide = document.querySelector(".menu-sidebar");
    hide.style.transform = "translateX(100%)";
    hide.style.opacity = "0";
    setTimeout(() => hide.style.display = "none", 300);
}

var typed = new Typed(".auto-text", {
    strings: ["Programmer", "Developer", "Gamer"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
})


