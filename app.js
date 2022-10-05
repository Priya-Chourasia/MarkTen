const billAmount = document.querySelector("#bill-amount");
const checkButton = document.querySelector("#check-button");
const cashGiven = document.querySelector("#cash-given");
const message = document.querySelector("#error-message");
const NoofNotes = document.querySelectorAll(".no-of-notes");

const availableNotes = [2000, 500, 100, 20, 10, 1];
checkButton.addEventListener("click", function validateBillandCashAmount() {
    hideMessage();
    if (billAmount.value > 0) {
        if (cashGiven.value >= billAmount.value) {
            const amounttobeReturned = cashGiven.value - billAmount.value;
            calculateChange(amounttobeReturned);

        } else {
            showMessage("The cash given should be atleast equal to bill amount");
        }

    } else {
        showMessage("Invalid bill amount");
    }

});

function calculateChange(amounttobeReturned) {
    for (let i = 0; i < availableNotes.length; i++) {
        const numberofNotes = Math.trunc(amounttobeReturned / availableNotes[i]);
        amounttobeReturned = amounttobeReturned % availableNotes[i];
        NoofNotes[i].innerText = numberofNotes;
    }
}

function hideMessage() {
    message.style.display = "none";
}

function showMessage(msg) {
    message.style.display = "block";
    message.innerText = msg;
}