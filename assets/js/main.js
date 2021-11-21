let year = document.getElementById("year");
let taxIncome = document.getElementById("taxIncome");
let einzel = document.getElementById("einzel");
let zusammen = document.getElementById("zusammen");
let church = document.getElementById("church");
let steuerInput = document.getElementById("steuerInput");
let churchInput = document.getElementById("churchInput");
let endResult = document.getElementById("endResult");
let lastResult;






press = () => {
    // ########### 2021 Start Einzel ########### //

    if (year.value == 2021) {
        if (taxIncome.value <= 9744) {
            steuerInput.innerHTML = 0 + " €";
            churchInput.innerHTML = 0 + " €";
            endResult.innerHTML = 0 + " €";
        }

        if (taxIncome.value >= 9745 && taxIncome.value <= 14753) {
            let result1 = (taxIncome.value - 9744) / 10000
            lastResult = (995.21 * result1 + 1400) * result1
            steuerInput.innerHTML = Math.floor(lastResult).toFixed(2) + " €";
            churchInput.innerHTML = 0 + " €";
            endResult.innerHTML = Math.floor(lastResult).toFixed(2) + " €";
        }

        if (14754 <= taxIncome.value && taxIncome.value <= 57918) {
            let result2 = (taxIncome.value - 14753) / 10000
            lastResult = (208.85 * result2 + 2397) * result2 + 950.96;
            steuerInput.innerHTML = Math.floor(lastResult).toFixed(2) + " €";
            churchInput.innerHTML = 0 + " €";
            endResult.innerHTML = Math.floor(lastResult).toFixed(2) + " €";
        }


        if (57919 <= taxIncome.value && taxIncome.value <= 274612) {
            lastResult = (0.42 * taxIncome.value) - 9136.63
            steuerInput.innerHTML = Math.floor(lastResult).toFixed(2) + " €";
            churchInput.innerHTML = 0 + " €";
            endResult.innerHTML = Math.floor(lastResult).toFixed(2) + " €";
        }

        if (274613 <= taxIncome.value) {
            lastResult = (0.45 * taxIncome.value) - 17374.99
            steuerInput.innerHTML = Math.floor(lastResult).toFixed(2) + " €";
            churchInput.innerHTML = 0 + " €";
            endResult.innerHTML = Math.floor(lastResult).toFixed(2) + " €";
        }

        // ########### 2021 Ende Einzel ########### //
        // ########### 2021 zusammen ########### //

        if (zusammen.checked) {
            if ((taxIncome.value / 2) <= 9744) {
                steuerInput.innerHTML = 0 + " €";
                churchInput.innerHTML = 0 + " €";
                endResult.innerHTML = 0 + " €";
            }

            if ((taxIncome.value / 2) >= 9745 && (taxIncome.value / 2) <= 14753) {
                let result1 = ((taxIncome.value / 2) - 9744) / 10000
                lastResult = (995.21 * result1 + 1400) * result1
                steuerInput.innerHTML = 2 * lastResult.toFixed(2) + " €";
                churchInput.innerHTML = 0 + " €";
                endResult.innerHTML = 2 * lastResult.toFixed(2) + " €";
            }

            if (14754 <= (taxIncome.value / 2) && (taxIncome.value / 2) <= 57918) {
                let result2 = ((taxIncome.value / 2) - 14753) / 10000
                lastResult = (208.85 * result2 + 2397) * result2 + 950.96;
                steuerInput.innerHTML = 2 * lastResult.toFixed(2) + " €";
                churchInput.innerHTML = 0 + " €";
                endResult.innerHTML = 2 * lastResult.toFixed(2) + " €";
            }


            if (57919 <= (taxIncome.value / 2) && (taxIncome.value / 2) <= 274612) {
                lastResult = (0.42 * (taxIncome.value / 2)) - 9136.63
                steuerInput.innerHTML = 2 * lastResult.toFixed(2) + " €";
                churchInput.innerHTML = 0 + " €";
                endResult.innerHTML = 2 * lastResult.toFixed(2) + " €";
            }

            if (274613 <= (taxIncome.value / 2)) {
                lastResult = (0.45 * (taxIncome.value / 2)) - 17374.99
                steuerInput.innerHTML = 2 * lastResult.toFixed(2) + " €";
                churchInput.innerHTML = 0 + " €";
                endResult.innerHTML = 2 * lastResult.toFixed(2) + " €";
            }
        }
    }
    // ########### 2021 zusammen ########### //
    // ########### 2020 Start Einzel ########### //
    if (year.value == 2020) {
        if (taxIncome.value <= 9408) {
            steuerInput.innerHTML = 0 + " €";
            churchInput.innerHTML = 0 + " €";
            endResult.innerHTML = 0 + " €";
        }

        if (9409 <= taxIncome.value && taxIncome.value <= 14532) {
            let result3 = (taxIncome.value - 9408) / 10000
            lastResult = (972.87 * result3 + 1400) * result3;
            steuerInput.innerHTML = Math.floor(lastResult).toFixed(2) + " €";
            churchInput.innerHTML = 0 + " €";
            endResult.innerHTML = Math.floor(lastResult).toFixed(2) + " €";
        }

        if (14533 <= taxIncome.value && taxIncome.value <= 57051) {
            let result4 = (taxIncome.value - 14532) / 10000
            lastResult = (212.02 * result4 + 2397) * result4 + 972.79;
            steuerInput.innerHTML = Math.floor(lastResult).toFixed(2) + " €";
            churchInput.innerHTML = 0 + " €";
            endResult.innerHTML = Math.floor(lastResult).toFixed(2) + " €";
        }

        if (57052 <= taxIncome.value && taxIncome.value <= 270500) {
            lastResult = 0.42 * taxIncome.value - 8963.74;
            steuerInput.innerHTML = Math.floor(lastResult).toFixed(2) + " €";
            churchInput.innerHTML = 0 + " €";
            endResult.innerHTML = Math.floor(lastResult).toFixed(2) + " €";
        }

        if (270501 <= taxIncome.value) {
            lastResult = (0.45 * taxIncome.value) - 17078.74;
            steuerInput.innerHTML = Math.floor(lastResult).toFixed(2) + " €";
            churchInput.innerHTML = 0 + " €";
            endResult.innerHTML = Math.floor(lastResult).toFixed(2) + " €";
        }

        // ########### 2020 Ende Einzel ########### //
        // ########### 2020 Start zusammen ########### //
        if (zusammen.checked) {
            if ((taxIncome.value / 2) <= 9408) {
                steuerInput.innerHTML = 0 + " €";
                churchInput.innerHTML = 0 + " €";
                endResult.innerHTML = 0 + " €";
            }

            if (9409 <= (taxIncome.value / 2) && (taxIncome.value / 2) <= 14532) {
                let result3 = ((taxIncome.value / 2) - 9408) / 10000
                lastResult = (972.87 * result3 + 1400) * result3;
                steuerInput.innerHTML = 2 * lastResult.toFixed(2) + " €";
                churchInput.innerHTML = 0 + " €";
                endResult.innerHTML = 2 * lastResult.toFixed(2) + " €";
            }

            if (14533 <= (taxIncome.value / 2) && (taxIncome.value / 2) <= 57051) {
                let result4 = ((taxIncome.value / 2) - 14532) / 10000
                lastResult = (212.02 * result4 + 2397) * result4 + 972.79;
                steuerInput.innerHTML = 2 * lastResult.toFixed(2) + " €";
                churchInput.innerHTML = 0 + " €";
                endResult.innerHTML = 2 * lastResult.toFixed(2) + " €";
            }

            if (57052 <= (taxIncome.value / 2) && (taxIncome.value / 2) <= 270500) {
                lastResult = 0.42 * (taxIncome.value / 2) - 8963.74;
                steuerInput.innerHTML = 2 * lastResult.toFixed(2) + " €";
                churchInput.innerHTML = 0 + " €";
                endResult.innerHTML = 2 * lastResult.toFixed(2) + " €";;
            }

            if (270501 <= (taxIncome.value / 2)) {
                lastResult = (0.45 * (taxIncome.value / 2)) - 17078.74;
                steuerInput.innerHTML = 2 * lastResult.toFixed(2) + " €";
                churchInput.innerHTML = 0 + " €";
                endResult.innerHTML = 2 * lastResult.toFixed(2) + " €";
            }
        }
    }
    // ########### 2020 Ende zusammen ########### //
    // ########### 2019 Start Einzel ########### //
    if (year.value == 2019) {
        if (taxIncome.value <= 9168) {
            steuerInput.innerHTML = 0 + " €";
            churchInput.innerHTML = 0 + " €";
            endResult.innerHTML = 0 + " €";
        }

        if (9169 <= taxIncome.value && taxIncome.value <= 14254) {
            let result5 = (taxIncome.value - 9168) / 10000
            lastResult = (980.14 * result5 + 1400) * result5;
            steuerInput.innerHTML = Math.floor(lastResult).toFixed(2) + " €";
            churchInput.innerHTML = 0 + " €";
            endResult.innerHTML = Math.floor(lastResult).toFixed(2) + " €";
        }

        if (14255 <= taxIncome.value && taxIncome.value <= 55960) {
            let result6 = (taxIncome.value - 14254) / 10000
            lastResult = (216.16 * result6 + 2397) * result6 + 965.58;
            steuerInput.innerHTML = Math.floor(lastResult).toFixed(2) + " €";
            churchInput.innerHTML = 0 + " €";
            endResult.innerHTML = Math.floor(lastResult).toFixed(2) + " €";
        }

        if (55961 <= taxIncome.value && taxIncome.value <= 265326) {
            lastResult = 0.42 * taxIncome.value - 8780.90;
            steuerInput.innerHTML = Math.floor(lastResult).toFixed(2) + " €";
            churchInput.innerHTML = 0 + " €";
            endResult.innerHTML = Math.floor(lastResult).toFixed(2) + " €";
        }

        if (270501 <= taxIncome.value) {
            lastResult = (0.45 * taxIncome.value) - 16740.68;
            steuerInput.innerHTML = Math.floor(lastResult).toFixed(2) + " €";
            churchInput.innerHTML = 0 + " €";
            endResult.innerHTML = Math.floor(lastResult).toFixed(2) + " €";
        }
        // ########### 2019 Ende Einzel ########### //
        // ########### 2019 Start zusammen ########### //
        if (zusammen.checked) {
            if ((taxIncome.value / 2) <= 9168) {
                steuerInput.innerHTML = 0 + " €";
                churchInput.innerHTML = 0 + " €";
                endResult.innerHTML = 0 + " €";
            }

            if (9169 <= (taxIncome.value / 2) && (taxIncome.value / 2) <= 14254) {
                let result5 = ((taxIncome.value / 2) - 9168) / 10000
                lastResult = (980.14 * result5 + 1400) * result5;
                steuerInput.innerHTML = 2 * lastResult.toFixed(2) + " €";
                churchInput.innerHTML = 0 + " €";
                endResult.innerHTML = 2 * lastResult.toFixed(2) + " €";
            }

            if (14255 <= (taxIncome.value / 2) && (taxIncome.value / 2) <= 55960) {
                let result6 = ((taxIncome.value / 2) - 14254) / 10000
                lastResult = (216.16 * result6 + 2397) * result6 + 965.58;
                steuerInput.innerHTML = 2 * lastResult.toFixed(2) + " €";
                churchInput.innerHTML = 0 + " €";
                endResult.innerHTML = 2 * lastResult.toFixed(2) + " €";
            }

            if (55961 <= (taxIncome.value / 2) && (taxIncome.value / 2) <= 265326) {
                lastResult = 0.42 * (taxIncome.value / 2) - 8780.90;
                steuerInput.innerHTML = 2 * lastResult.toFixed(2) + " €";
                churchInput.innerHTML = 0 + " €";
                endResult.innerHTML = 2 * lastResult.toFixed(2) + " €";
            }

            if (270501 <= (taxIncome.value / 2)) {
                lastResult = (0.45 * (taxIncome.value / 2)) - 16740.68;
                steuerInput.innerHTML = 2 * lastResult.toFixed(2) + " €";
                churchInput.innerHTML = 0 + " €";
                endResult.innerHTML = 2 * lastResult.toFixed(2) + " €";
            }
        }
    }
    // ########### 2019 Ende zusammen ########### //

    if (church.value == 9) {
        let resultChurch = lastResult * 1.09;
        churchInput.innerHTML = Math.floor((resultChurch - lastResult)).toFixed(2) + " €";
        endResult.innerHTML = Math.floor(resultChurch).toFixed(2) + " €";
    }
    if (church.value == 8) {
        let resultChurch = lastResult * 1.08;
        churchInput.innerHTML = (resultChurch - lastResult).toFixed(2) + " €";
        endResult.innerHTML = (resultChurch).toFixed(2) + " €";
    }

    if (zusammen.checked) {
        if (church.value == 9) {
            let resultChurch = lastResult * 1.09;
            churchInput.innerHTML = ((resultChurch - lastResult) * 2).toFixed(2) + " €";
            endResult.innerHTML = 2 * resultChurch.toFixed(2) + " €";
        }
        if (church.value == 8) {
            let resultChurch = lastResult * 1.08;
            churchInput.innerHTML = ((resultChurch - lastResult) * 2).toFixed(2) + " €";
            endResult.innerHTML = 2 * resultChurch.toFixed(2) + " €";
        }
    }

}










































