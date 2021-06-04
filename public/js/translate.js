window.onload = () => {
  var lang = getParameterByName("lang");
  if (lang) {
    changeLenguage(lang);
  }
};

function changeLenguage(lang) {
  let keys = Object.keys(languages[lang]);
  let element;
  let elementFlag;
  for (const key of keys) {
    element = document.getElementById(key);
    if (element) {
      element.innerHTML = languages[lang][key];
    }
  }
  let keysLanguage = Object.keys(languages);
  for (const key of keysLanguage) {
    elementFlag = document.getElementById(`lang_${key}`);
    if (elementFlag) {
      if (key === lang) {
        elementFlag.classList.add("languageSelected");
      } else {
        elementFlag.classList.remove("languageSelected");
      }
    }
  }
}

function getParameterByName(name, url = window.location.href) {
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}
