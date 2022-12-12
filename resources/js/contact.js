window.onload = function() {
}

function validate() {
    console.log("submitted form")
    var message = document.getElementById("submission-message")
    message.style.visibility = "visible";
    document.forms["contact-form"].reset()
    return false;
}