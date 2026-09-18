import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCUJP_ERfmcsRWxMzQHkkXQgjWZ9xCgfeU",
  authDomain: "lets-talk-ff7c2.firebaseapp.com",
  databaseURL: "https://lets-talk-ff7c2-default-rtdb.firebaseio.com/",
  projectId: "lets-talk-ff7c2"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };
