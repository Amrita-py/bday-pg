function showIntro() {
    document.getElementById("welcome").classList.add("hidden");
    document.getElementById("intro").classList.remove("hidden");
}

function backToWelcome() {
    document.getElementById("intro").classList.add("hidden");
    document.getElementById("welcome").classList.remove("hidden");
}

function showGallery() {
    document.getElementById("intro").classList.add("hidden");
    document.getElementById("gallery").classList.remove("hidden");
}

function backToIntro() {
    document.getElementById("gallery").classList.add("hidden");
    document.getElementById("intro").classList.remove("hidden");
}

function showBirthday() {
    document.getElementById("gallery").classList.add("hidden");
    document.getElementById("birthday").classList.remove("hidden");
}

function backToGallery() {
    document.getElementById("birthday").classList.add("hidden");
    document.getElementById("gallery").classList.remove("hidden");
}

function showMessage() {
    document.getElementById("birthday").classList.add("hidden");
    document.getElementById("message").classList.remove("hidden");
}

function backToBirthday() {
    document.getElementById("message").classList.add("hidden");
    document.getElementById("birthday").classList.remove("hidden");
}

function exitSite() {
    alert("Keep smiling!❤️\nAmy");
    window.close();
}