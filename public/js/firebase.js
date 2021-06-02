var firebaseConfig = {
  apiKey: "AIzaSyCxEYp9KAapTO4H0aIEz9CX-QVbPyjLdpY",
  authDomain: "cyclingcities-23d59.firebaseapp.com",
  projectId: "cyclingcities-23d59",
  storageBucket: "cyclingcities-23d59.appspot.com",
  messagingSenderId: "330939898842",
  appId: "1:330939898842:web:3a2b7f90d551771ba37ee3",
  measurementId: "G-170SY6H4EM"
};

firebase.initializeApp(firebaseConfig);

firebase.analytics();

let firestore = firebase.firestore();

let auth = firebase.auth();

let firma;

/* let ui = new firebaseui.auth.AuthUI(firebase.auth());

ui.start('#firebaseui-auth-container', {
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ],
}); */

async function nuevaFirma() {
  firma = null;
  const drone = document.querySelector(
    'input[name="drone"][type="radio"]:checked'
  ).value;
  const name = document.getElementById("name").value;
  const cityOrganization = document.getElementById("cityOrganization").value;
  const title = document.getElementById("title").value;
  const city = document.getElementById("city").value;
  const email = document.getElementById("email").value;
  const scales = document.getElementById("scales").checked;
  let newFirma = {
    date: new Date(),
    drone,
    name,
    cityOrganization,
    title,
    city,
    email,
    scales,
  };
  firma = newFirma;
  let ref = firestore.collection("firmas");
  try {
    await ref.add(newFirma);
    document.getElementById("form").reset();
    showModalShared();
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
