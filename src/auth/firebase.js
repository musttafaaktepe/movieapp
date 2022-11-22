import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDvqgJzErfkNlSDx-Eakw8M_-4FXGPMJBI",
  authDomain: "moviemstf.firebaseapp.com",
  projectId: "moviemstf",
  storageBucket: "moviemstf.appspot.com",
  messagingSenderId: "404100070270",
  appId: "1:404100070270:web:d7b1f10016db2983bd512f",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
