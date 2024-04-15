document.getElementById("buy-tickets-btn").addEventListener("click", function() {
    const allSeatContainer = document.getElementById("all-seat-container");
    // Perform actions using allSeatContainer
    allSeatContainer.scrollIntoView({ behavior: 'smooth' });
});

function setInnerText(id, value){
    document.getElementById(id).innerText = value;
}

