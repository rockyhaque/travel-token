document.getElementById("buy-tickets-btn").addEventListener("click", function() {
    const allSeatContainer = document.getElementById("booking-section");
    // Perform actions using allSeatContainer
    allSeatContainer.scrollIntoView({ behavior: 'smooth' });
});

function setInnerText(id, value){
    document.getElementById(id).innerText = value;
}

document.getElementById('continue').addEventListener('click', function(){
    window.location.href = 'index.html'
})