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
  console.log(cityLabel);
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
  const element = document.getElementById("languages");
  const classes = element.classList.value;
  const isShowElement = classes.includes("showModalShared");
  if (isShowElement) {
    element.classList.remove("showModalShared");
    return;
  }
  element.classList.add("showModalShared");
}

function sharedPost(redSocial) {
  
}

function openPage(ruta) {
  window.open(ruta, "_self");
}
