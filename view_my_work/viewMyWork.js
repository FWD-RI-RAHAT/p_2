"use strict";
const leftArrowBtn = document.getElementById('left_arrow');
const rightArrowBtn = document.getElementById('right_arrow');
const imgTag = document.querySelector('img');
const numberOfProject = document.getElementById('number');

let imageSRC = ["Images/project_().png", "Images/demo.png","Images/990885173-667873077.jpg","Images/pro-business-website-template-2754394540.jpg", "Images/classyads-free-bootstrap-website-templates-1024x807-4106188292.jpg"];

let count = 0;

rightArrowBtn.addEventListener('click', () => {
    if(count < 4) {
        count++;
        imgTag.src = imageSRC[count];
        numberOfProject.innerHTML = count + 1;
        
    } else {
        count = 5;
        imgTag.src = imageSRC[count];
        numberOfProject.innerHTML = count + 1;
    }
});

leftArrowBtn.addEventListener('click', () => {
    if(count > 1) {
        count--;
        imgTag.src = imageSRC[count];
        numberOfProject.innerHTML = count;
    } else {
        count = 0;
        imgTag.src = imageSRC[count];
        numberOfProject.innerHTML = count;
    }
});