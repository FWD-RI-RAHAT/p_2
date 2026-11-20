"use strict";
const formBox = document.querySelector('.form_box #form');
const name_ = document.getElementById("name");
const email = document.getElementById("email");
const message = document.querySelector(".submit_btn");

formBox.addEventListener('submit', function() {
   name_.value = "";
   email.value = "";
   message.value = "";
});
