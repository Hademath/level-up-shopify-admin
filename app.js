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
  // setupWrap.classList.remove("mt-10");
});



const SvgIcons = document.querySelectorAll('#wrapper_btn svg');
const wrapperBtn = document.querySelector("#wrapper_btn");
const getSvgArray = Array.from(SvgIcons);
const upIcon = getSvgArray[0].style.display = "block"
const downIcon = getSvgArray[1].style.display = "none"
// console.log(getSvgArray)
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

class StepIcons {
  constructor(stepIndex) {
    this.stepIndex = stepIndex;
    this.icons = document.querySelectorAll(`.card:nth-child(${this.stepIndex + 1}) .step svg`);
    this.completedIcon = this.icons[this.icons.length - 1];
    this.loaderIcons = Array.from(this.icons).slice(2, this.icons.length - 1);
    this.isLoading = false;
    this.init();
  }
 
  init() {
  const firstIcon = this.icons[0];
  const secondIcon = this.icons[1];

  firstIcon.addEventListener('mouseenter', () => this.toggleIcons(secondIcon, firstIcon));
  firstIcon.addEventListener('mouseleave', () => this.toggleIcons(firstIcon, secondIcon));

  secondIcon.addEventListener('mouseenter', () => this.toggleIcons(firstIcon, secondIcon));
  secondIcon.addEventListener('mouseleave', () => this.toggleIcons(secondIcon, firstIcon));

  secondIcon.addEventListener('click', () => this.handleIconClick());
  this.completedIcon.addEventListener('click', () => this.resetIcons());
  }

  toggleIcons(iconToShow, iconToHide) {
    iconToShow.style.display = 'block';
    iconToHide.style.display = 'none';
  }

  handleIconClick() {
    if (!this.isLoading) {
      this.isLoading = true;
      this.completedIcon.classList.remove('rotate-animation');

      this.loaderIcons.forEach((icon, index) => {
        setTimeout(() => {
          icon.style.display = 'block';
          icon.classList.add('rotate-animation');
          if (index === this.loaderIcons.length - 1) {
            setTimeout(() => {
              this.loaderIcons.forEach((icon) => icon.classList.remove('rotate-animation'));
              this.isLoading = false;
              this.completedIcon.style.display = 'block';
              this.completedIcon.classList.toggle('completed');
            }, 100);
          }
        }, index * 100);
      });
    } else {
      this.loaderIcons.forEach((icon) => icon.classList.remove('rotate-animation'));
      this.isLoading = false;
    }
  }

  resetIcons() {
    if (this.isLoading) return;

    this.completedIcon.classList.toggle('completed');
    this.completedIcon.style.display = 'none';
    this.icons[0].style.display = 'block';
    this.icons[1].style.display = 'none';
    this.icons[2].style.display = 'none';
    this.icons[3].style.display = 'none';
    this.icons[4].style.display = 'none';
    this.icons[5].style.display = 'none';
    this.icons[6].style.display = 'none';
    this.icons[7].style.display = 'none';
  }
}

// Initialize each step
let step1 = new StepIcons(0);
let step2 = new StepIcons(1); 
let step3 = new StepIcons(2); 
let step4 = new StepIcons(3); 
let step5 = new StepIcons(4); 

