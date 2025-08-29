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
cheackover.forEach(service => {
    const card = document.createElement("div")
    card.className = "border-2 border-red-500 bg-white w-[430px] h-[360px] rounded-2xl p-8 shadow-lg";


    card.innerHTML = `
    <div class="flex justify-between items-center mb-5">
                <img src="./assets/${service.icon}" alt="" class="w-[60px] h-[60px] bg-[#ffe3e2] rounded-md">
                <button class="btn btn-circle" onclick="increaseHeart()">
                    <i class="fa-solid fa-heart"></i>
                </button>
            </div>
            <div class="text-center mb-5">
                <h1 class="text-2xl font-bold mb-3">${service.name}</h1>
                <p class="text-[20px] mb-3">${service.type}</p>
                <h1 class="text-3xl font-bold mb-3">${service.number}</h1>
                <p class="bg-[#f2f2f2] w-[61px] h-[40px] text-center rounded-2xl px-4 py-2 mx-auto">${service.tag}</p>
            </div>
            </div>
            <div class="flex justify-between items-center">
                <button class="btn w-[140px] h-[40px]"><i class="fa-solid fa-copy"></i>Copy</button>
                <button class="btn btn-success w-[140px] h-[40px]" onclick="callService('${service.name}','${service.number}')">
                    <i class="fa-solid fa-phone"></i>Call
                </button>
            </div>



    `
})
 cardContainer.appendChild(card);

function callService(serviceName,serviceNumber){
     coins -= 20;
        updateCoinDisplay();

        alert(`Calling ${serviceName} at ${serviceNumber}`);

        const historyList = document.getElementById('call-history');
        const li = document.createElement('li');
        li.textContent = `${serviceName} - ${serviceNumber}`;
        historyList.appendChild(li);
}
