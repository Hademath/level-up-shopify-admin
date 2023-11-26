const profileBtn = document.querySelector("#profileBtn");
const mainDrop = document.querySelector("#profiles");
const noticeDropDown = document.querySelector("#noticeDropdown");
const noticeButton = document.querySelector("#noticeButton");

noticeButton.addEventListener("click", () => {
  noticeDropDown.classList.toggle("hidden_dropdown");
  mainDrop.classList.add("hidden_dropdown");
});

profileBtn.addEventListener("click", () => {
  mainDrop.classList.toggle("hidden_dropdown");
  noticeDropDown.classList.add("hidden_dropdown");
});



const mainContainer = document.querySelector(".outer_container");
const closeCalloutButton = document.querySelector("#trialCalloutButton");
const setupWrap = document.querySelector(".setup_wrap");

closeCalloutButton.addEventListener("click", () => {
  mainContainer.classList.add("hidden_dropdown");
  setupWrap.classList.remove("mt-10");
});



const SvgIcons = document.querySelectorAll('#wrapper_btn svg');
const wrapperBtn = document.querySelector("#wrapper_btn");
const getSvgArray = Array.from(SvgIcons);
const upIcon = getSvgArray[0].style.display = "block"
const downIcon = getSvgArray[1].style.display = "none"
console.log(getSvgArray)
const wrapperContent = document.querySelector("#wrapperContent");


wrapperBtn.addEventListener("click", () => {
  wrapperContent.classList.toggle("hidden_dropdown");
  if (wrapperContent.classList.contains("hidden_dropdown")) {
     getSvgArray[0].style.display = "none";
     getSvgArray[1].style.display = "block";
   ;
  } else {
    getSvgArray[0].style.display = "block";
    getSvgArray[1].style.display = "none";
  }
});


const steps = document.querySelectorAll(".card");
 steps.forEach((step, index) => {
   step.addEventListener("click", function () {
     if (!step.classList.contains("active")) {
       const activeStep = document.querySelector(".card.active");
       if (activeStep) {
         activeStep.classList.remove("active");
       }
       step.classList.add("active");
     }
   });
 });

const stepIcons = document.querySelectorAll('.step svg circle');
  stepIcons.forEach((icon, index) => {
      icon.addEventListener('dblclick', function () {
        const progressBarDots = document.querySelectorAll('.progress-bar .dot');
        progressBarDots[index].classList.toggle('marked');
      });
  });


const firstIcon = document.querySelector(".step svg:nth-child(1)");
const secondIcons = document.querySelector(".step svg:nth-child(2)");

  firstIcon.addEventListener("mouseenter", () => {
    firstIcon.style.display = "none";
    secondIcons.style.display = "block";
  }); 

  firstIcon.addEventListener("mouseleave", () => {
    firstIcon.style.display = "block";
    secondIcons.style.display = "none";
  });


const icons = document.querySelectorAll('.step svg');
const secondIcon = icons[1];
const loaderIcons = Array.from(icons).slice(2, 7); // Icons 3 to 8
const completedIcon = icons[7]; // Icon 8
const thirdIcons = icons[2];
const fourthIcons = icons[3];
const fifthIcons = icons[4];
const sixthIcons = icons[5];
const seventhIcons = icons[6];

let isLoading = false;

secondIcon.addEventListener('click', function () {
    if (!isLoading) {
        isLoading = true;
        completedIcon.classList.remove('rotate-animation');

        loaderIcons.forEach((icon, index) => {
            setTimeout(() => {
              icon.style.display = 'block'; 
                icon.classList.add('rotate-animation'); 
                if (index === loaderIcons.length - 1) {
                    setTimeout(() => {
                        loaderIcons.forEach((icon) => {
                            icon.classList.remove('rotate-animation');
                           
                        });
                        isLoading = false; 
                        completedIcon.style.display = "block";
                        completedIcon.style.pointerEvents = "auto";
                        completedIcon.classList.toggle('completed');
                    }, 100); 
                }
            }, index * 100); 
        });
    } else {
        loaderIcons.forEach((icon) => {
            icon.classList.remove('rotate-animation');
        });
        isLoading = false;
    }
});


//toggle the mark
completedIcon.addEventListener('click', function () {
    if (isLoading) return;
    
  completedIcon.classList.toggle('completed');
  completedIcon.style.display = 'none';
  secondIcon.style.display = 'none'
  thirdIcons.style.display = "none"
  fourthIcons.style.display = "none"
  fifthIcons.style.display = "none"
  sixthIcons.style.display = "none"
  seventhIcons.style.display = "none"
  eightIcons.style.display = "none"
    
  firstIcon.style.display = 'block';
});

