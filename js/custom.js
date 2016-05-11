var feedbackBtn = document.querySelector(".gs-contacts-feedback");
var feedbackPopup = document.querySelector(".gs-feedback-popup");
var feedbackOverlay = document.querySelector(".gs-modal-overlay");
var feedbackClose = document.querySelector(".gs-feedback-close");
var feedbackName = document.querySelector("[name=feedback-name]");
var feedbackEmail = document.querySelector("[name=feedback-email]");
var feedbackMsg = document.querySelector("[name=feedback-text]");
var feedbackForm = document.querySelector(".gs-feedback-form");

var gsSearch = document.getElementById("search");
var gsLogin = document.getElementById("login-email");
var gsPass = document.getElementById("login-pass");

var storageName = localStorage.getItem("name");

feedbackBtn.addEventListener("click", function(event) {
  event.preventDefault();
  feedbackPopup.classList.add("gs-feedback-show");
  feedbackOverlay.classList.add("gs-overlay-show");
  
  if(storageName) {
    feedbackName.value = storageName;
    feedbackEmail.focus();
  }
  else {
    feedbackName.focus();
  }
});

feedbackClose.addEventListener("click", function(event) {
  event.preventDefault();
  feedbackPopup.classList.remove("gs-feedback-show");
  feedbackOverlay.classList.remove("gs-overlay-show");
  feedbackPopup.classList.remove("gs-feedback-error");
});

feedbackForm.addEventListener("submit", function(event) {
  if(!feedbackName.value || !feedbackEmail.value) {
    feedbackPopup.classList.remove("gs-feedback-error");
    feedbackPopup.offsetWidth = feedbackPopup.offsetWidth;
    event.preventDefault();
    feedbackPopup.classList.add("gs-feedback-error");
  }
  else {
    localStorage.setItem("name", feedbackName.value);
  }
      
});

window.addEventListener("keydown", function(event) {
  if(event.keyCode == 27) {
    if(feedbackPopup.classList.contains("gs-feedback-show")) {
      feedbackPopup.classList.remove("gs-feedback-show");
      feedbackPopup.classList.remove("gs-feedback-error");
      feedbackOverlay.classList.remove("gs-overlay-show");
    }
  }
});

//LABEL OVER INPUT

gsSearch.onblur = function() {
  if(gsSearch.value) {
    gsSearch.classList.add("filled");
  }
  else {
    gsSearch.classList.remove("filled");
  }
}

gsLogin.onblur = function() {
  if(gsLogin.value) {
    gsLogin.classList.add("filled");
  }
  else {
    gsLogin.classList.remove("filled");
  }
}

gsPass.onblur = function() {
  if(gsPass.value) {
    gsPass.classList.add("filled");
  }
  else {
    gsPass.classList.remove("filled");
  }
}

feedbackName.onblur = function() {
  if(feedbackName.value) {
    feedbackName.classList.add("filled");
  }
  else {
    feedbackName.classList.remove("filled");
  }
}

feedbackEmail.onblur = function() {
  if(feedbackEmail.value) {
    feedbackEmail.classList.add("filled");
  }
  else {
    feedbackEmail.classList.remove("filled");
  }
}

feedbackMsg.onblur = function() {
  if(feedbackMsg.value) {
    feedbackMsg.classList.add("filled");
  }
  else {
    feedbackMsg.classList.remove("filled");
  }
}