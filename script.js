function prepareEventListeners() {
    let keyboardKeys = ['A', 'S', 'D', 'F', 'G', 'H', 'J', "W", "E", "T", "Y", "U"];
    document.addEventListener("keydown", function(event) {
        //Remove the "Key" part
        let key = event.code.slice(3);
        if (keyboardKeys.includes(key)) {
            console.log(`key '${key.toLowerCase()}' is pressed.`)
            let audio = new Audio("https://github.com/matslabek/Virtual_Piano/raw/master/sounds/" + key + ".mp3");
            audio.play();
        }
        else {
            console.log("Warning! You pressed the wrong key!");
        }
    });
}

prepareEventListeners();