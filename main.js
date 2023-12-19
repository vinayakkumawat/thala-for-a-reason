function checkReason() {
    event.preventDefault();

    let inputValue = document.forms['thalaForm'].elements['userInput'].value;

    if (!inputValue) {
        alert("please write something...");
        return;
    }

    let isStringReason = typeof inputValue === 'string' && (inputValue.length === 7 || inputValue.length % 7 === 0);

    let numericValue = parseInt(inputValue, 10);

    if ((numericValue === 10) || (inputValue == 'sachin')) {
        let audio = document.getElementById('sachin-meme');
        audio.play();
        document.getElementById('thala').innerHTML = "<h2>Aree Ae Bediya...</h2>";
        document.getElementById('reset').innerHTML = "Check another one";
        return;
    }

    let numString = numericValue.toString();
    let sum = 0;
    for (let i = 0; i < numString.length; i++) {
        sum += parseInt(numString[i]);
    }

    let isNumericReason = !isNaN(numericValue) && (numericValue === 7 || numericValue % 7 === 0 || sum === 7 || sum % 7 === 0);

    let isReason = isStringReason || isNumericReason;

    if (isReason) {
        const canvas = document.getElementById('confetti');
        const jsConfetti = new JSConfetti();
        jsConfetti.addConfetti();

        let audio = document.getElementById('thala-song');
        audio.play();

        let reason;

        if (isNumericReason) {
            if (sum === 7) {
                reason = `<h2>There is a reason behind you 🎉🎉<br> ${inputValue.split('').join(' + ')} = 7</h2>`;
            } else if (sum % 7 === 0) {
                reason = `<h2>There is a reason behind you 🎉🎉<br> ${inputValue.split('').join(' + ')} = ${sum} / ${sum / 7} = 7</h2>`;
            } else if (numericValue % 7 === 0) {
                reason = `<h2>There is a reason behind you 🎉🎉<br> ${inputValue} / ${inputValue / 7} = 7</h2>`;
            }
        } else {
            reason = `<h2>There is a reason behind you 🎉🎉<br> ${inputValue.split('').join(' + ')} = 7</h2>`;
        }
        document.getElementById('thala').innerHTML = reason;
        document.getElementById('reset').innerHTML = "Check another one";
        return;
    } else {
        let audio = document.getElementById('moye-moye');
        audio.play();
        let reason = `<h2>There is no reason behind you.<br> You should follow me on Instagram for a reason.</h2>`;
        document.getElementById('thala').innerHTML = reason;
        document.getElementById('reset').innerHTML = "Check another one";
        return;
    }
}