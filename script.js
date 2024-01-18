let ham = document.getElementById("img1");
let cross = document.getElementById("img2");
let nav = document.querySelector(".navbar");

ham.addEventListener("click", () => {
    nav.style.transform = "translateX(0%)"; 
    ham.style.display = "none";
    cross.style.display = "inline";
});

cross.addEventListener("click", () => {
    nav.style.transform = "translateX(-100%)"; 
    setTimeout(() => {
        ham.style.display = "inline";
    }, 450);
    cross.style.display = "none";
});

