const dashboardHeader = document.querySelector(".dashboard-header");
const sideBar = document.querySelector(".sidebar");
const mainDashboardContent = document.querySelector(".main-dashboard-content");
const sideBarToggler = document.querySelector("#sidebar-toggle");
const headerUserAvatarContainer = document.querySelector('#user-avatar-container');
const userDetailsDropdown = document.querySelector(".user-details-dropdown");

sideBarToggler.addEventListener('click', () => {

});

headerUserAvatarContainer.addEventListener('click', () => {
    userDetailsDropdown.classList.toggle("hide-user-details-dropdown");
})

const questionForms = document.querySelectorAll(".question-form");

questionForms.forEach(questionForm => {
    let toggleButton = questionForm.querySelector(".form-dropdown-btn");
    let formBody =  questionForm.lastElementChild;
    let formBodies = document.querySelectorAll(".question-form .form-body")


    toggleButton.addEventListener('click', () => {
        formBodies.forEach((item) => {
          if (formBody !== item) {
            item.classList.add("hide");
          }
        });


        formBody.classList.toggle('hide');
    });
})

const addMemberBtn = document.querySelector("#add-member-btn");
const invitationModal = document.querySelector(".invite-member-modal");

addMemberBtn.addEventListener("click", ()=> {
  invitationModal.style.top = "0";
});



function openTab(evt, tabName) {
  var i, tabContent, tabLinks;
  
  tabContent = document.getElementsByClassName("tabs-content");
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }

  tabLinks = document.getElementsByClassName("tabs-link");
  for (i = 0; i < tabLinks.length; i++) {
    tabLinks[i].className = tabLinks[i].className.replace(" active-item", "");
  }

  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active-item";
}
// Open Members tab by default on page load.
document.getElementById("defaultOpen").click();