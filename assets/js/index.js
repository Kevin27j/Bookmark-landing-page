// NAVBAR TOGGLE FUNCTION
// Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon
const toggleIcon = $(".toggle-icon");

toggleIcon.click(function () {
  let linksMenu = $(".links-wrapper");
  if (linksMenu.css("display") === "block") {
    linksMenu.css("display", "none");
  } else {
    linksMenu.css("display", "block");
  }
})

// FEATURES LIST TOGGLE
// Show features tab based on list selection
const featureList = $(".list-item");
const featureTabs = $(".feature-wrapper > div");

for (let i = 0; i < featureList.length; i++) {
  featureList.eq(i).click(function () {
    // Toggle red underline when click on a features list link
    featureList.find("a.active-list").removeClass("active-list");
    featureList.eq(i).find("a").toggleClass("active-list");
    // Display and hide tabs based on list selection
    featureTabs.removeClass("show").addClass("hide");
    featureTabs.eq(i).removeClass("hide").addClass("show");
  })
}

// FAQ ACCORDION TOGGLE
const faqAcc = $(".faq-accordion");

for (let i = 0; i < faqAcc.length; i++) {
  faqAcc.eq(i).click(function () {
    faqAcc.eq(i).toggleClass("active");

    let faqPanel = $(".faq-panel");
    faqPanel.eq(i).toggleClass("hide");
  })
}

// EMAIL VALIDATION 
const form = $(".form");
const emailInput = $(".email-input");
const emailButton = $(".form-button");
const emailError = $(".email-error");

// Validate email
const emailRgx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

emailButton.click(function(){
  // if user input is not an email show error message
  if (!emailInput.val().match(emailRgx) || emailInput.val() === ""){
    emailError.css("display", "block");
    // Remove error message when user clicks on email input
    emailInput.click(function(){
      emailError.css("display", "none");
    })
  } 
  else {
    emailError.css("display", "none")
    alert("Great Success")
    form.submit(function(event){
      event.preventDefault();
    });
  }
})

