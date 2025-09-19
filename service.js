// 1. Navbar heart count
const navHeart = document.getElementById("nav-heart-count");
const heartButtons = document.querySelectorAll(".btn-icon");

for (const btn of heartButtons) {
  btn.addEventListener("click", () => {
    let Count = parseInt(navHeart.innerText);
    navHeart.innerText = Count + 1;
  });
}
// copy btn count
const navCopy = document.getElementById("nav-copy-icon");
const copyButtons = document.querySelectorAll(".copy-btn");
for (const btn of copyButtons) {
  btn.addEventListener("click", () => {
    let total = parseInt(navCopy.innerText);
    navCopy.innerText = total + 1;
  });
}
// Coin counter
const coinCount = document.getElementById("coin-count");
const callButtons = document.querySelectorAll(".call-btn");
const callHistoryContainer = document.querySelector(".call-history-parent");
const callCOst = 20;
for (const btn of callButtons) {
  btn.addEventListener("click", () => {
    const card = btn.closest(".card-parent > div");
    const serviceName = card.querySelector(".service-name").innerText;
    const serviceNumber = card.querySelector(".service-number").innerText;
    let coins = parseInt(coinCount.innerText);
    if (coins < callCOst) {
      alert("You don't have enough coins to make this call!");
      return;
    }
    coinCount.innerText = coins - callCOst;
    alert(`Calling ${serviceName}: ${serviceNumber}`);
    const historyEntry = document.createElement("div");
    historyEntry.classList.add("history-entry");
    historyEntry.innerHTML = `
      <p><strong>${serviceName}</strong></p>
      <p>${serviceNumber}</p>
    `;
    callHistoryContainer.appendChild(historyEntry);
  });
}

// call history clear
const clearHistoryBtn = document.getElementById("clear-history-btn");
const historyList = document.getElementById("history-list");
clearHistoryBtn.addEventListener("click", function () {
  historyList.innerHTML = "";
});
