function burgerMenuButton() {
    let menuList = document.getElementById("menu-list");
    if (menuList.style.display === "none") {
        menuList.style.display = "block";
    } else {
        menuList.style.display = "none";
    }
}