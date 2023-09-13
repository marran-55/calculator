radio.onReceivedString(function (receivedString) {
    let index = 0
    första_räknesatsen = [0, 5]
    första_räknesatsen_nmr = 0
    upphöjt = 0
    for (let index = 0; index <= list.length; index++) {
        stringen = list[index]
        listnummer = stringen.split(",")
        y = listnummer[0]
        z = listnummer[1]
        siffror[parseFloat(y)] = parseFloat(z)
    }
    for (let index = 0; index <= siffror.length; index++) {
        if (siffror[index] > 9) {
            operation = siffror[index]
            första_räknesatsen_nmr += 1
            upphöjt = 0
        } else {
            första_räknesatsen[första_räknesatsen_nmr] = första_räknesatsen_nmr * 10 ** upphöjt + siffror[index]
            upphöjt += 1
        }
    }
    if (siffror[index] == 10) {
        radio.sendNumber(första_räknesatsen[0] + första_räknesatsen[1])
    }
    if (siffror[index] == 11) {
        radio.sendNumber(första_räknesatsen[0] - första_räknesatsen[1])
    }
    if (siffror[index] == 12) {
        radio.sendNumber(första_räknesatsen[0] * första_räknesatsen[1])
    }
    if (siffror[index] == 13) {
        radio.sendNumber(första_räknesatsen[0] / första_räknesatsen[1])
    }
    if (siffror[index] == 14) {
        radio.sendNumber(första_räknesatsen[0] ** första_räknesatsen[1])
    }
})
let operation = 0
let z = ""
let y = ""
let listnummer: string[] = []
let stringen = 0
let upphöjt = 0
let första_räknesatsen_nmr = 0
let första_räknesatsen: number[] = []
let siffror: number[] = []
let list: number[] = []
let x = 0
radio.setGroup(x)
list = [0, 5]
siffror = [0, 5]
basic.forever(function () {
	
})
