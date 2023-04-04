// Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon
function myFunction() {
    let x = $("#links-menu");
    if (x.css("display") === "block") {
      x.css("display", "none");
    } else {
      x.css("display", "block");
    }
  }

  // Show tab based on list selection
  