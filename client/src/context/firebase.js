import * as firebase from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import "firebase/firestore";

var firebaseConfig = {
  /* Enter your firebase Config settings here or this wont work */
  apiKey: "AIzaSyDtFehAuqiTQH5JMhPV_spi-f4iAmF5ROw",
  authDomain: "applied-polymer-248714.firebaseapp.com",
  projectId: "applied-polymer-248714",
  storageBucket: "applied-polymer-248714.appspot.com",
  messagingSenderId: "281073352854",
  appId: "1:281073352854:web:3590cbfb78090fb06a42b7",
  measurementId: "G-1X4144MHCF",
};

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

firebase.initializeApp(firebaseConfig);


const storage = firebase.storage();

export {storage,firebase as default};
