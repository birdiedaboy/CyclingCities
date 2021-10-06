/* var formulario = document.getElementById("mc-embedded-subscribe-form");

console.log("hola");

formulario.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("me diste un click");
  try {
    var data = new FormData(formulario);
    fetch(
      "https://itdp.us7.list-manage.com/subscribe/post?u=0b5e10eda9e3afdb7eceb76f6&amp;id=f069000cf2",
      {
        method: "POST",
        body: data,
      }
    )
      .then((response) => {
        console.log(response);
        showModalShared();
      })
      .catch((error) => {
        console.error(error);
      });
  } catch (error) {
    console.error(error);
  }
}); */


/* target="_blank"
  action="https://itdp.us7.list-manage.com/subscribe/post?u=0b5e10eda9e3afdb7eceb76f6&amp;id=f069000cf2"
  onsubmit="showModalShared();"
  method="post" */