// Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon
const toggleIcon = $(".toggle-icon");

toggleIcon.click(function () {
  let x = $("#links-menu");
  if (x.css("display") === "block") {
    x.css("display", "none");
  } else {
    x.css("display", "block");
  }
})

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

console.log()
