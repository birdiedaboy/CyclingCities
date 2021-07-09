window.onload = () => {
  let lang = getParameterByName("lang");
  let url = window.location.href;
  url = url.split("/");
  let page = "";
  for (const element of url) {
    if (element.includes(".html")) {
      url = element;
      url = url.split(".html");
      if (url.length > 0) {
        page = url[0];
      }
    }
  }
  if (lang && page) {
    changeLenguage(lang, page);
    const element = document.getElementById("language_active");
    if (element) {
      element.innerHTML = lang;
    }
  }
  hideVideo(lang);
};

function changeLenguage(lang, page) {
  let keys = Object.keys(languages[page][lang]);
  let element;
  let elementFlag;
  for (const key of keys) {
    element = document.getElementById(key);
    if (element) {
      if (key.includes("placeholder")) {
        element.setAttribute("placeholder", languages[page][lang][key]);
      } else {
        element.innerHTML = languages[page][lang][key];
      }
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


function hideVideo(lang) {
  let frame_en = document.getElementById('frame_en');
  let frame_es = document.getElementById('frame_es');
  let frame_ch = document.getElementById('frame_ch');
  let frame_id = document.getElementById('frame_id');
  let frame_pt = document.getElementById('frame_pt');
  if (!lang) {
    frame_es.remove();
    frame_ch.remove();
    frame_id.remove();
    frame_pt.remove();
  } else if(lang == 'en') {
    frame_es.remove();
    frame_ch.remove();
    frame_id.remove();
    frame_pt.remove();
  } else  if (land == 'es') {
    frame_en.remove();
    frame_ch.remove();
    frame_id.remove();
    frame_pt.remove();
  } else  if (land == 'ch') {
    frame_en.remove();
    frame_es.remove();
    frame_id.remove();
    frame_pt.remove();
  } else  if (land == 'id') {
    frame_en.remove();
    frame_es.remove();
    frame_ch.remove();
    frame_pt.remove();
  } else  if (land == 'pt') {
    frame_en.remove();
    frame_es.remove();
    frame_ch.remove();
    frame_id.remove();
  }
}