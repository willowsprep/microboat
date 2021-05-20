

pins.digitalWritePin(DigitalPin.P0, 1)
pins.setPull(DigitalPin.P1, PinPullMode.PullUp)
// Radio config
radio.setGroup(2203)
let right: Boolean; 
right = false;
// radio listener
radio.onReceivedString(function (receivedString: string) {
    if(receivedString == "RIGHT_TURN" && right == false){
        pins.digitalWritePin(DigitalPin.P0, 0)
        right = true;
    } else if(receivedString == "RIGHT_TURN" && right == true){
        right = false;
    }
})
