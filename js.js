function toggleMenu() {
    const toggleMenu = document.querySelector(".toggleMenu");
    const navigation = document.querySelector(".navigation");
    toggleMenu.classList.toggle("active");
    navigation.classList.toggle("active");
}
function checkAge() {
    var ageInput = document.getElementById("age").value;
    var adultCard = document.querySelector(".card:nth-child(1)");
    var childCard = document.querySelector(".card:nth-child(2)");

    if (ageInput >= 18) {
        adultCard.style.display = "block";
        childCard.style.display = "none";
    } else {
        adultCard.style.display = "none";
        childCard.style.display = "block";
    }
}
