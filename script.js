const getcolor = () => {
    const randomNumber = Math.floor(Math.random() * 16777215);  // '*' by 1677215 to get hexadecimal code.
    const randomCode = "#" + randomNumber.toString(16);
    document.body.style.backgroundColor = randomCode;
    document.getElementById("color-code").innerText=randomCode;
    // console.log(randomNumber, randomCode);

    navigator.clipboard.writeText(randomCode); // to copy the code to clipboard on click button
}
document.getElementById("btn").addEventListener("click", getcolor)
getcolor();