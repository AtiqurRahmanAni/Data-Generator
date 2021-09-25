const displayDiv = `<div class="display">
<div class="row-1">
    <input type="radio" data-col="1" data-row="1" class="dot">
    <input type="radio" data-col="2" data-row="1" class="dot">
    <input type="radio" data-col="3" data-row="1" class="dot">
    <input type="radio" data-col="4" data-row="1" class="dot">
    <input type="radio" data-col="5" data-row="1" class="dot">
</div>
<div class="row-2">
    <input type="radio" data-col="1" data-row="2" class="dot">
    <input type="radio" data-col="2" data-row="2" class="dot">
    <input type="radio" data-col="3" data-row="2" class="dot">
    <input type="radio" data-col="4" data-row="2" class="dot">
    <input type="radio" data-col="5" data-row="2" class="dot">
</div>
<div class="row-3">
    <input type="radio" data-col="1" data-row="3" class="dot">
    <input type="radio" data-col="2" data-row="3" class="dot">
    <input type="radio" data-col="3" data-row="3" class="dot">
    <input type="radio" data-col="4" data-row="3" class="dot">
    <input type="radio" data-col="5" data-row="3" class="dot">
</div>
<div class="row-4">
    <input type="radio" data-col="1" data-row="4" class="dot">
    <input type="radio" data-col="2" data-row="4" class="dot">
    <input type="radio" data-col="3" data-row="4" class="dot">
    <input type="radio" data-col="4" data-row="4" class="dot">
    <input type="radio" data-col="5" data-row="4" class="dot">
</div>
<div class="row-5">
    <input type="radio" data-col="1" data-row="5" class="dot">
    <input type="radio" data-col="2" data-row="5" class="dot">
    <input type="radio" data-col="3" data-row="5" class="dot">
    <input type="radio" data-col="4" data-row="5" class="dot">
    <input type="radio" data-col="5" data-row="5" class="dot">
</div>
<div class="row-6">
    <input type="radio" data-col="1" data-row="6" class="dot">
    <input type="radio" data-col="2" data-row="6" class="dot">
    <input type="radio" data-col="3" data-row="6" class="dot">
    <input type="radio" data-col="4" data-row="6" class="dot">
    <input type="radio" data-col="5" data-row="6" class="dot">
</div>
<div class="row-7">
    <input type="radio" data-col="1" data-row="7" class="dot">
    <input type="radio" data-col="2" data-row="7" class="dot">
    <input type="radio" data-col="3" data-row="7" class="dot">
    <input type="radio" data-col="4" data-row="7" class="dot">
    <input type="radio" data-col="5" data-row="7" class="dot">
</div>
</div>`;
const displayContainer = document.querySelector(".display-container");
const resetButton = document.querySelector(".reset-button");
const binData = document.querySelector(".bin-data");
const addressData = document.querySelector(".address-data");
const dataLen = document.querySelector(".data-length");
let dataLength = 0;
// console.log(binData);
// console.log(addressData);
//add displays
for (let i = 0; i < 8; i++) {
    displayContainer.innerHTML += displayDiv;
}
const dots = document.querySelectorAll(".dot");
// console.log(dots);
//display-x classlist to display divs
const displays = document.querySelectorAll(".display");
for (let i = 0; i < displays.length; i++) {
    displays[i].classList.add(`display-${i + 1}`);
}
dots.forEach(dot => {
    dot.addEventListener("change", () => {
        let displayNo = dot.parentNode.parentNode.classList[1];
        let row = parseInt(dot.dataset.row);
        let col = parseInt(dot.dataset.col);
        if (displayNo == "display-1") {
            generateData(1, row, col);
        } else if (displayNo == "display-2") {
            generateData(2, row, col);
        } else if (displayNo == "display-3") {
            generateData(3, row, col);
        } else if (displayNo == "display-4") {
            generateData(4, row, col);
        } else if (displayNo == "display-5") {
            generateData(5, row, col);
        } else if (displayNo == "display-6") {
            generateData(6, row, col);
        } else if (displayNo == "display-7") {
            generateData(7, row, col);
        } else if (displayNo == "display-8") {
            generateData(8, row, col);
        }

    });
});

resetButton.addEventListener("click", () => {
    dots.forEach(dot => {
        if (dot.checked === true) {
            dot.checked = false;
        }
    });
    binData.innerText = "DOT DB ";
    addressData.innerText = "DOTADD DW ";
    dataLen.innerText = "I DW ";
    dataLength = 0;
    arrDisp1 = initArray();
    arrDisp2 = initArray();
    arrDisp3 = initArray();
    arrDisp4 = initArray();
    arrDisp5 = initArray();
    arrDisp6 = initArray();
    arrDisp7 = initArray();
    arrDisp8 = initArray();

});

let arrDisp1 = initArray();
let arrDisp2 = initArray();
let arrDisp3 = initArray();
let arrDisp4 = initArray();
let arrDisp5 = initArray();
let arrDisp6 = initArray();
let arrDisp7 = initArray();
let arrDisp8 = initArray();

function generateData(display, row, col) {
    if (display === 1) {
        arrDisp1[row - 1][col - 1] = 1;
        let bin = "0";
        let tempAddress = 0 + col - 1;
        for (let i = 6; i >= 0; i--) {
            bin += arrDisp1[i][col - 1] + "";
        }
        let lsb = tempAddress.toString(16).toUpperCase();
        lsb = lsb.length < 2 ? "0" + lsb : lsb;
        let address = "20" + lsb + "H,";
        bin += "B,";
        showData(bin, address);
    } else if (display === 2) {
        arrDisp2[row - 1][col - 1] = 1;
        let bin = "0";
        let tempAddress = 5 + col - 1;
        for (let i = 6; i >= 0; i--) {
            bin += arrDisp2[i][col - 1] + "";
        }
        let lsb = tempAddress.toString(16).toUpperCase();
        lsb = lsb.length < 2 ? "0" + lsb : lsb;
        let address = "20" + lsb + "H,";
        bin += "B,";
        showData(bin, address);
    } else if (display === 3) {
        arrDisp3[row - 1][col - 1] = 1;
        let bin = "0";
        let tempAddress = 10 + col - 1;
        for (let i = 6; i >= 0; i--) {
            bin += arrDisp3[i][col - 1] + "";
        }
        let lsb = tempAddress.toString(16).toUpperCase();
        lsb = lsb.length < 2 ? "0" + lsb : lsb;
        let address = "20" + lsb + "H,";
        bin += "B,";
        showData(bin, address);
    } else if (display === 4) {
        arrDisp4[row - 1][col - 1] = 1;
        let bin = "0";
        let tempAddress = 15 + col - 1;
        for (let i = 6; i >= 0; i--) {
            bin += arrDisp4[i][col - 1] + "";
        }
        let lsb = tempAddress.toString(16).toUpperCase();
        lsb = lsb.length < 2 ? "0" + lsb : lsb;
        let address = "20" + lsb + "H,";
        bin += "B,";
        showData(bin, address);
    } else if (display === 5) {
        arrDisp5[row - 1][col - 1] = 1;
        let bin = "0";
        let tempAddress = 20 + col - 1;
        for (let i = 6; i >= 0; i--) {
            bin += arrDisp5[i][col - 1] + "";
        }
        let lsb = tempAddress.toString(16).toUpperCase();
        lsb = lsb.length < 2 ? "0" + lsb : lsb;
        let address = "20" + lsb + "H,";
        bin += "B,";
        showData(bin, address);
    } else if (display === 6) {
        arrDisp6[row - 1][col - 1] = 1;
        let bin = "0";
        let tempAddress = 25 + col - 1;
        for (let i = 6; i >= 0; i--) {
            bin += arrDisp6[i][col - 1] + "";
        }
        let lsb = tempAddress.toString(16).toUpperCase();
        lsb = lsb.length < 2 ? "0" + lsb : lsb;
        let address = "20" + lsb + "H,";
        bin += "B,";
        showData(bin, address);
    } else if (display === 7) {
        arrDisp7[row - 1][col - 1] = 1;
        let bin = "0";
        let tempAddress = 30 + col - 1;
        for (let i = 6; i >= 0; i--) {
            bin += arrDisp7[i][col - 1] + "";
        }
        let lsb = tempAddress.toString(16).toUpperCase();
        lsb = lsb.length < 2 ? "0" + lsb : lsb;
        let address = "20" + lsb + "H,";
        bin += "B,";
        showData(bin, address);
    } else if (display === 8) {
        arrDisp8[row - 1][col - 1] = 1;
        let bin = "0";
        let tempAddress = 35 + col - 1;
        for (let i = 6; i >= 0; i--) {
            bin += arrDisp8[i][col - 1] + "";
        }
        let lsb = tempAddress.toString(16).toUpperCase();
        lsb = lsb.length < 2 ? "0" + lsb : lsb;
        let address = "20" + lsb + "H,";
        bin += "B,";
        showData(bin, address);
    }

}
function showData(bin, address) {
    // console.log(address);
    dataLength++;
    dataLen.innerText = "I DW " + dataLength;
    binData.append(document.createTextNode(bin));
    addressData.append(document.createTextNode(address));
}
function initArray() {
    let array = [];
    for (let i = 0; i < 7; ++i) {
        let ara = [0, 0, 0, 0, 0];
        array.push(ara);
    }
    return array;
}