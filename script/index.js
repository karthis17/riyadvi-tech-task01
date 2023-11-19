var btn = document.getElementById("navbarToggle");
var container = document.getElementById("sub1");
var menu = document.getElementById("sub2");
var flog = true;
if (btn.style.display === "none") {
    container.classList.remove("sub-list");
    menu.classList.remove("sub-list");
}
btn.addEventListener("click", (res) => {
    console.log(res);
    if (flog) {
        menu.style.display = "block";
        flog = false;
    } else {
        menu.style.display = "none";
        flog = true;
    }
    container.classList.toggle("sub-list");
    menu.classList.toggle("sub-list");
});