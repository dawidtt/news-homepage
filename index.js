let counter = 0;
const mobileNavOpen = document.querySelector("#mobile-nav-open");

mobileNavOpen.style.display = "none";
const mobileNavButton = document.querySelector("#mobile-nav");
function navMobile() {
  const mobileNavClose = document.querySelector("#mobile-nav-open img");
  const blackFog = document.querySelector("#black-fog");
  const body = document.querySelector("body");
  console.log(mobileNavOpen.style.display);

  if (mobileNavOpen.style.display == "none") {
    mobileNavOpen.style.display = "block";
    blackFog.style.display = "block";
    body.style.overflow = "hidden";
  } else if (mobileNavOpen.style.display == "block") {
    mobileNavOpen.style.display = "none";
    blackFog.style.display = "none";
    body.style.overflow = "scroll";
  }
}
function navMobileClose() {}
