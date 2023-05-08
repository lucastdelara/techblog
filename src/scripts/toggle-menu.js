class animationBtn {
    static animationToggle () {
        const textsBtn = ["X"]
        const toggleBtn = document.querySelector("button")
            toggleBtn.addEventListener("click", () => {
            let toggleMenu = document.querySelector(".toggle")
            if (toggleMenu.classList.value.includes("show-menu-mobile")) {
                toggleMenu.classList.add("hide-menu-mobile")
                toggleMenu.classList.remove("show-menu-mobile")
            }else {
                toggleMenu.classList.add("show-menu-mobile")
                toggleMenu.classList.remove("hide-menu-mobile")
            }
        })
    }
}
animationBtn.animationToggle();