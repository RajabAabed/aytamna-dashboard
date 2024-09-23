document.addEventListener("DOMContentLoaded", function () {
  changeVisibilityPasswordInput();
  sliderOption();
});

function changeVisibilityPasswordInput() {
  var passwordInput = document.getElementById("password");

  var visibilityIcon = document.getElementsByClassName("visibility-icon")[0];

  var showIcon = document.getElementsByClassName("show-icon")[0];
  var hiddenIcon = document.getElementsByClassName("hidden-icon")[0];

  visibilityIcon.addEventListener("click", function () {
    var passwordInputType = passwordInput.getAttribute("type");

    if (passwordInputType == "password") {
      passwordInput.setAttribute("type", "text");
      showIcon.toggleAttribute("hidden");
      hiddenIcon.toggleAttribute("hidden");
    } else {
      passwordInput.setAttribute("type", "password");
      showIcon.toggleAttribute("hidden");
      hiddenIcon.toggleAttribute("hidden");
    }
  });
}

function sliderOption() {
  var splide = new Splide(".splide", {
    type: "loop",
    fixedWidth: "100%",
    height: "100%",
    perPage: 1,

    pagination: false,
    arrows: false,
    perMove: 1,
    type: "fade",
  });

  splide.mount();
}
