function increaseHeart() {
    const heartSpan = document.getElementById("heart-count");
    const currentCount = parseInt(heartSpan.innerText);
    heartSpan.innerText = currentCount + 1;
}
let coins = 100;
updateCoin();
function updateCoin() {
    document.getElementById("coin-count").innerText = coins;
}
const cheackover = [
    { name: "Anti-Corruption Helpline", type: "Anti-Corruption", number: "163", icon: "police.png", tag: "Govt." },
    { name: "Fire Service Number", type: "Fire Service", number: "999", icon: "ambulance.png", tag: "Fire" },
    { name: "National Emergency Number", type: "National Emergency", number: "999", icon: "emergency.png", tag: "All" },
    { name: "Police Helpline Number", type: "Police", number: "999", icon: "police.png", tag: "All" },
]

const cardContainer = document.getElementById("card-container")
cheackover.forEach(service=> {
    const card = document.createElement("div")
    card.className = "border-2 border-red-500 bg-white w-[430px] h-[360px] rounded-2xl p-8 shadow-lg"
})