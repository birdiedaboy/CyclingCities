window.onload = () => {
  var lang = getParameterByName("lang");
  if (lang) {
    changeLenguage(lang);
  }
};

let languages = {
  en: {
    home_section_1_title: "How are you",
  },
  es: {
    home_section_1_title: "Como estas tu",
  },
};

function changeLenguage(lang) {
  let keys = Object.keys(languages[lang]);
  let element;
  for (const key of keys) {
    element = document.getElementById(key);
    if (element) {
      element.innerHTML = languages[lang][key];
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
