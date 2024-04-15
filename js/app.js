let selectCount = 0;
let leftCount = 40;

let totalPriceCount = 0;
let discount = 0;
let totalSum = 0;

const allSeatBtn = document.getElementsByClassName("add-btn");
const perSeatRent = document.getElementById("five-hundred-fifty");
const selectedSeat = document.getElementById("selected-seat-container");
const lineBreak = document.getElementById("line-break")
const totalPriceElement = document.getElementById("total-price");
const grandTotalElement = document.getElementById("grand-total");
const couponCodeInput = document.getElementById('coupon-code');
const discountContainer = document.getElementById("discount-container");
const couponContainer = document.getElementById("coupon-container");

function seatBtnFunc(e){
    selectCount += 1;
    leftCount -= 1;

    setInnerText("selected-seat-count", selectCount)
    setInnerText("seats-left", leftCount)

    if(selectCount > 4){
        alert("You have booked maximum seat!")
        return;
    }

    const seatName = e.target.innerText;

    const li = document.createElement("li")

    const seatPara = document.createElement("p");
    seatPara.innerText = seatName;

    const classPara = document.createElement("p");
    classPara.innerText = "Economoy"

    const pricePara = document.createElement("p");
    pricePara.innerText = parseInt(550);

    li.appendChild(seatPara);
    li.appendChild(classPara);
    li.appendChild(pricePara);

    li.classList.add("flex", "justify-between", "text-gray")

    selectedSeat.appendChild(li);
    
    // if(selectCount > 1){
    //     lineBreak.classList.remove("hidden")
    // }
    
    const convertedTotalPrice = parseInt(totalPriceElement.innerText);
    const totalSum = convertedTotalPrice + parseInt(550);

    setInnerText("total-price", totalSum)
    console.log(totalSum);

    
    const convertedGrandTotal = parseInt(grandTotalElement.innerText);
    const grandTotalSum = convertedGrandTotal + parseInt(550)

    setInnerText("grand-total", grandTotalSum)
    console.log(grandTotalSum);

    


}


for(let seatBtn of allSeatBtn){
    seatBtn.addEventListener("click", seatBtnFunc)
}


function promoCodeApply(){
    const couponCode = couponCodeInput.value;

    if(couponCode === "NEW15"){
        discount = totalPriceElement.innerText * 0.15;

        const li = document.createElement("li");
        const p = document.createElement("p")
        p.innerText = `You have got ${discount} BDT discount.`;
        li.appendChild(p);
        discountContainer.appendChild(li);

        couponContainer.classList.add("hidden")

        console.log(totalPriceElement);
        grandTotalElement.innerText = totalPriceElement.innerText - discount;
    }

    if(couponCode === "Couple20"){
        discount = totalPriceElement.innerText * 0.20;

        const li = document.createElement("li");
        const p = document.createElement("p")
        p.innerText = `You have got ${discount} BDT discount.`;
        li.appendChild(p);
        discountContainer.appendChild(li);

        console.log(totalPriceElement);
        grandTotalElement.innerText = totalPriceElement.innerText - discount;
    }
}