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

const nuevaFirma = async () => {
  console.log("Nueva Firma");

  let firma = {
    check: true,
    email: "example@example.com",
  };

  let ref = firestore.collection("firmas");

  try {
    let data = await ref.add(firma);
    console.log("data: ", data);
  } catch (error) {
    console.log("error: ", error);
  }
};

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

/* nuevaFirma();
obtenerFirmas(); */
