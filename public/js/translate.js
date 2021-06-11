window.onload = () => {
  let lang = getParameterByName("lang");
  let url = window.location.href;
  url = url.split('/'); 
  let page = '';
  for (const element of url) {
    if(element.includes('.html')) {
      url = element;
      url = url.split('.html'); 
      if(url.length > 0) {
        page = url[0];
      }
    }
  }
  if (lang && page) {
    changeLenguage(lang, page);
    const element = document.getElementById('language_active');
    if (element) {
      element.innerHTML = lang;
    }
  }
};

function changeLenguage(lang, page) {
  let keys = Object.keys(languages[page][lang]);
  let element;
  let elementFlag;
  for (const key of keys) {
    element = document.getElementById(key);
    if (element) {
      element.innerHTML = languages[page][lang][key];
    }
  }
  let keysLanguage = Object.keys(languages[page]);
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
