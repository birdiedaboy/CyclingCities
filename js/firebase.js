var firebaseConfig = {
  apiKey: "AIzaSyDGCe36mjaHTurx6pjH1aY-S8WerG-HUGg",
  authDomain: "remi-test-ac43b.firebaseapp.com",
  projectId: "remi-test-ac43b",
  storageBucket: "remi-test-ac43b.appspot.com",
  messagingSenderId: "237360435510",
  appId: "1:237360435510:web:2deb5db5b045efde33a397",
  measurementId: "G-9Y09PL6DS8",
};

firebase.initializeApp(firebaseConfig);

firebase.analytics();

let firestore = firebase.firestore();

let auth = firebase.auth();

/* let ui = new firebaseui.auth.AuthUI(firebase.auth());

ui.start('#firebaseui-auth-container', {
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ],
}); */

async function nuevaFirma(event) {
  const drone = document.querySelector(
    'input[name="drone"][type="radio"]:checked'
  ).value;
  const name = document.getElementById("name").value;
  const cityOrganization = document.getElementById("cityOrganization").value;
  const title = document.getElementById("title").value;
  const city = document.getElementById("city").value;
  const email = document.getElementById("email").value;
  const scales = document.getElementById("scales").checked;
  let firma = {
    date: new Date(),
    drone,
    name,
    cityOrganization,
    title,
    city,
    email,
    scales,
  };
  let ref = firestore.collection("firmas");
  try {
    let data = await ref.add(firma);
    document.getElementById("form").reset();
    alert("Formulario enviado");
    console.log("data: ", data);
  } catch (error) {
    console.log("error: ", error);
  }
}

const obtenerFirmas = async () => {
  console.log("obtener Firmas");

  let ref = firestore.collection("firmas");

  try {
    let collection = await ref.get();
    let data = collection.docs.map((doc) => {
      return {
        ...doc.data(),
        id: doc.id,
      };
    });
    console.log("data: ", data);
  } catch (error) {
    console.log("error: ", error);
  }
};

/* const login = async () => {
  console.log('hola');
  auth.sendSignInLinkToEmail()
}

const initExport = async () => {
  try {
    let user = await login();
    console.log("user: ", user);
  } catch (error) {
    alert("error: ", error);
  }
} */

/* nuevaFirma();
obtenerFirmas(); */
