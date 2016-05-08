var feedbackBtn = document.querySelector(".gs-contacts-feedback");
var feedbackPopup = document.querySelector(".gs-feedback-popup");
var feedbackOverlay = document.querySelector(".gs-modal-overlay");
var feedbackClose = document.querySelector(".gs-feedback-close");
var feedbackName = document.querySelector("[name=feedback-name]");
var feedbackEmail = document.querySelector("[name=feedback-email]");
var feedbackForm = document.querySelector(".gs-feedback-form");

var storageName = localStorage.getItem("name");

feedbackBtn.addEventListener("click", function(event) {
  event.preventDefault();
  feedbackPopup.classList.add("gs-feedback-show");
  feedbackOverlay.classList.add("gs-feedback-show");
  
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
  feedbackOverlay.classList.remove("gs-feedback-show");
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
    }
  }
});