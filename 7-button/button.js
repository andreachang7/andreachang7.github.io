var scrollTopBtn = document.getElementById("scrollTopBtn");
var rootElement = document.documentElement;

function scrollTop() {
  // Scroll to top logic
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
scrollTopBtn.addEventListener("click", scrollTop);