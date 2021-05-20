enum RadioMessage {
    RightOn_Straight = 19294,
    RightOff_LeftTurn = 17706,
    message1 = 49434
}
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 10) {
        pins.digitalWritePin(DigitalPin.P0, 0)
    } else if (receivedNumber == 20) {
        pins.digitalWritePin(DigitalPin.P0, 1)
    }
})
radio.onReceivedMessage(RadioMessage.RightOff_LeftTurn, function () {
    if (pins.digitalReadPin(DigitalPin.P1) == 0) {
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
})
radio.onReceivedMessage(RadioMessage.RightOn_Straight, function () {
    if (pins.digitalReadPin(DigitalPin.P1) == 0) {
        pins.digitalWritePin(DigitalPin.P0, 1)
    }
})
pins.digitalWritePin(DigitalPin.P1, 1)
basic.showIcon(IconNames.TShirt)

