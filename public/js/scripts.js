window.addEventListener("click", function (e) {
  if (!document.getElementById("actionLanguage").contains(e.target)) {
    const element = document.getElementById("languages");
    const classes = element.classList.value;
    const isShowElement = classes.includes("showModalLanguage");
    if (isShowElement) {
      element.classList.remove("showModalLanguage");
      return;
    }
  }
});

function changeValueCity(event) {
  const cityOrganization = document.getElementById("mce-MMERGE5");
  cityOrganization.value = event;
}

function changeCityInput() {
  const cityOrganization = document.getElementById("mce-MMERGE5").value;
  const cityLabel = document.getElementById("cityLabel_placeholder");
  cityLabel.value = cityOrganization;
}

function showLanguages() {
  const element = document.getElementById("languages");
  const classes = element.classList.value;
  const isShowElement = classes.includes("showModalLanguage");
  if (isShowElement) {
    element.classList.remove("showModalLanguage");
    return;
  }
  element.classList.add("showModalLanguage");
}

function showModalShared() {
  const element = document.getElementById("modalShared");
  const classes = element.classList.value;
  const isShowElement = classes.includes("showModalShared");
  if (isShowElement) {
    element.classList.remove("showModalShared");
    return;
  }
  element.classList.add("showModalShared");
}
function sharedPost(redSocial) {
  let url = 'https://cyclingcities.itdp.org/pledge.html';
  let message = `${firma.cityOrganization} just signed the %23CyclingCities pledge! We are now part of a global coalition working to increase access for 25 million more people to safe and connected cycle lanes by 2025. %23CyclingCities25, ${url}`
  const redesSociales = {
    whatsapp: `https://wa.me/?text=${message}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${message}`,
    twitter: `https://twitter.com/intent/tweet?text=${message}`,
    email: `mailto:?body=${message}`,
  }
  let ruta = redesSociales[redSocial];
  window.open(ruta);
}

function openPage(ruta) {
  window.open(ruta, "_self");
}
