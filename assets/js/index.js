// NAVBAR TOGGLE FUNCTION
// Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon
const toggleIcon = $(".toggle-icon");

toggleIcon.click(function () {
  let linksMenu = $("#links-menu");
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