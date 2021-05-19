enum RadioMessage {
    RightOff_LeftTurn = 17706,
    RightOn_Straight = 19294,
    message1 = 49434
}
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 10) {
        pins.digitalWritePin(DigitalPin.P1, 0)
    } else if (receivedNumber == 20) {
        pins.digitalWritePin(DigitalPin.P1, 1)
    }
})
radio.onReceivedMessage(RadioMessage.RightOff_LeftTurn, function () {
    if (pins.digitalReadPin(DigitalPin.P1) == 0) {
        pins.digitalWritePin(DigitalPin.P1, 0)
    }
})
radio.onReceivedMessage(RadioMessage.RightOn_Straight, function () {
    if (pins.digitalReadPin(DigitalPin.P1) == 0) {
        pins.digitalWritePin(DigitalPin.P1, 1)
    }
})
radio.setGroup(160)
pins.digitalWritePin(DigitalPin.P1, 1)
basic.showIcon(IconNames.TShirt)
    
