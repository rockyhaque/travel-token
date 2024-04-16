let selectCount = 0;
let leftCount = 40;

let totalPriceCount = 0;
let discount = 0;
let totalSum = 0;

const allSeatBtn = document.getElementsByClassName("add-btn");
const perSeatRent = document.getElementById("five-hundred-fifty");
const selectedSeat = document.getElementById("selected-seat-container");
const lineBreak = document.getElementById("line-break");
const totalPriceElement = document.getElementById("total-price");
const grandTotalElement = document.getElementById("grand-total");
const couponCodeInput = document.getElementById("coupon-code");
const discountContainer = document.getElementById("discount-container");
const couponContainer = document.getElementById("coupon-container");

function seatBtnFunc(e) {
  selectCount += 1;
  leftCount -= 1;

  if (selectCount > 4) {
    alert("You have booked maximum seat!");
    return;
  }

  if (selectCount === 4) {
    document.getElementById("applyButton").disabled = false;
  }

  setInnerText("selected-seat-count", selectCount);
  setInnerText("seats-left", leftCount);

  const seatName = e.target.innerText;
  const seatBtnContainer = e.target;

  seatBtnContainer.classList.remove("bg-graish");
  seatBtnContainer.classList.add("bg-green");

  const li = document.createElement("li");

  const seatPara = document.createElement("p");
  seatPara.innerText = seatName;

  const classPara = document.createElement("p");
  classPara.innerText = "Economoy";

  const pricePara = document.createElement("p");
  pricePara.innerText = parseInt(550);

  li.appendChild(seatPara);
  li.appendChild(classPara);
  li.appendChild(pricePara);

  li.classList.add("flex", "justify-between", "text-gray");

  selectedSeat.appendChild(li);

  if(selectCount > 0){
      lineBreak.classList.remove("hidden");
      lineBreak.classList.add("block")
  }

  const convertedTotalPrice = parseInt(totalPriceElement.innerText);
  const totalSum = convertedTotalPrice + parseInt(550);

  setInnerText("total-price", totalSum);
  console.log(totalSum);

  const convertedGrandTotal = parseInt(grandTotalElement.innerText);
  const grandTotalSum = convertedGrandTotal + parseInt(550);

  setInnerText("grand-total", grandTotalSum);
  console.log(grandTotalSum);

  // User booking info
  inputValidationFunc()
}

for (let seatBtn of allSeatBtn) {
  seatBtn.addEventListener("click", seatBtnFunc);
}

function promoCodeApply() {
  const couponCode = couponCodeInput.value;

  if (couponCode === "NEW15") {
    discount = totalPriceElement.innerText * 0.15;

    const li = document.createElement("li");
    const p = document.createElement("p");
    p.innerText = `You have got ${discount} BDT discount.`;
    li.appendChild(p);
    discountContainer.appendChild(li);

    couponContainer.classList.add("hidden");

    console.log(totalPriceElement);
    grandTotalElement.innerText = totalPriceElement.innerText - discount;
  }

  if (couponCode === "Couple20") {
    discount = totalPriceElement.innerText * 0.2;

    const li = document.createElement("li");
    const p = document.createElement("p");
    p.innerText = `You have got ${discount} BDT discount.`;
    li.appendChild(p);
    discountContainer.appendChild(li);

    console.log(totalPriceElement);
    grandTotalElement.innerText = totalPriceElement.innerText - discount;
  }

  if (couponCode !== "NEW15" && couponCode !== "Couple20") {
    alert("Oops! Invalid Coupon Code.");
    couponCodeInput.value = "";
  }
}

function inputValidationFunc() {
  const passengerName = document.getElementById("passenger-name");
  const phoneNumber = document.getElementById("phone-number");
  const emailId = document.getElementById("email-id");
  const nextButton = document.getElementById("next-btn");

  const inputFields = [passengerName, phoneNumber, emailId];

  inputFields.forEach((inputField) => {
    inputField.addEventListener("input", () => {
      let isValid = true;

      inputFields.forEach((field) => {
        if (field.value.trim() === "") {
          isValid = false;
        }
      });

      if (isValid) {
        nextButton.disabled = false;
      } else {
        nextButton.disabled = true;
      }
    });
  });
}


