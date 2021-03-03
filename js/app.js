function toggle_plus(id) {
    var f = document.getElementById(id);
    if (f.classList.contains("fa-plus")) {
            f.classList.remove("fa-plus");
            f.classList.add("fa-minus");
        } else {
            f.classList.remove("fa-minus");
            f.classList.add("fa-plus");
        }
}