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

function changeCityInput() {
  const cityOrganization = document.getElementById("cityOrganization").value;
  const cityLabel = document.getElementById("cityLabel");
  cityLabel.innerHTML = cityOrganization;
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
  let message = `${firma.cityOrganization} just signed the #CyclingCities pledge! We are now part of a global coalition working to increase access for 25 million more people to safe and connected cycle lanes by 2025. #CyclingCities25`
  const redesSociales = {
    whatsapp: `https://api.whatsapp.com/send?text=${message}`,
    facebook: '',
    twitter: '',
    email: '',
  }
  let ruta = redesSociales[redesSociales];
  window.open(ruta);
}

function openPage(ruta) {
  window.open(ruta, "_self");
}
