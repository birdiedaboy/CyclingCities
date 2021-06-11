var firebaseConfig = {
  apiKey: "AIzaSyCxEYp9KAapTO4H0aIEz9CX-QVbPyjLdpY",
  authDomain: "cyclingcities-23d59.firebaseapp.com",
  projectId: "cyclingcities-23d59",
  storageBucket: "cyclingcities-23d59.appspot.com",
  messagingSenderId: "330939898842",
  appId: "1:330939898842:web:3a2b7f90d551771ba37ee3",
  measurementId: "G-170SY6H4EM",
};

firebase.initializeApp(firebaseConfig);

firebase.analytics();

let firestore = firebase.firestore();

let auth = firebase.auth();

let firma;

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
    const cityOrganization = document.getElementById("cityOrganization");
    cityOrganization.value = "";
    showModalShared();
  } catch (error) {
    alert("error: ", error);
  }
}

const initExport = async () => {
  const button = document.getElementById("exportData");
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  button.innerHTML = "Loading...";
  button.classList.add("loading");
  try {
    await auth.signInWithEmailAndPassword(email, password);
    let collection = await firestore.collection("firmas").orderBy("date").get();
    let firmas = collection.docs.map((doc) => {
      return {
        ...doc.data(),
        date: new Date(doc.data().date.seconds * 1000),
        id: doc.id,
      };
    });
    if (firmas.length < 1) {
      button.innerHTML = "No hay informacion";
      button.classList.remove("loading");
      return;
    }
    const keys = [
      "date",
      "name",
      "email",
      "cityOrganization",
      "title",
      "city",
      "drone",
      "scales",
    ];
    const rows = [
      [
        "Date",
        "Name",
        "Email",
        "City Organization",
        "Title",
        "City",
        "Drone",
        "Scales",
      ],
    ];
    for (const element of firmas) {
      let row = [];
      for (const key of keys) {
        row.push(element[key]);
      }
      rows.push(row);
    }
    let csvContent = rows.map((e) => e.join(",")).join("\n");
    var blob = new Blob([csvContent]);
    if (window.navigator.msSaveOrOpenBlob) {
      window.navigator.msSaveBlob(blob, "contacts.csv");
    } else {
      var a = window.document.createElement("a");
      a.href = window.URL.createObjectURL(blob, {
        type: "text/plain",
      });
      a.download = "contacts.csv";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
    button.innerHTML = "Export data";
    button.classList.remove("loading");
  } catch (error) {
    button.innerHTML = "Volver a intentar";
    button.classList.remove("loading");
    alert(error.message);
  }
};
