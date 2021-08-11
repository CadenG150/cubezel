function check() {
    cross = parseFloat(document.getElementById("cross").value)
    f2l = parseFloat(document.getElementById("f2l").value)
    oll = parseFloat(document.getElementById("oll").value)
    pll = parseFloat(document.getElementById("pll").value)
    if (isNaN(cross)==false && isNaN(f2l)==false && isNaN(oll)==false && isNaN(pll)==false) {
        solved = cross+f2l+oll+pll
        ideals = [12, 50, 16.5, 21.5]
        steps = ["cross", "f2l", "oll", "pll"]
        textSteps = ["Cross", "F2L", "OLL", "PLL"]
        yourPercents = [(cross/solved*100), (f2l/solved*100), (oll/solved*100), (pll/solved*100)]
        idealTimes = [solved*0.12, solved*0.50, solved*0.165, solved*0.215]
        for (i in yourPercents) {
            id = "#" + steps[i] + "Text"
            idIdeal = id + "Ideal"
            $(id).text(textSteps[i] + ": " + String(yourPercents[i].toFixed(1)) + "%");
            $(idIdeal).text("Ideal " + textSteps[i] + ": " + String(idealTimes[i].toFixed(1)));
            if (yourPercents[i] <= ideals[i]) {
                $(id).addClass("green")
            } else {
                $(id).addClass("red")
            }
        }
    } else {
        console.log("Incomplete")
    }
}