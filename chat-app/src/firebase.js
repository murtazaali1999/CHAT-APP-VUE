import firebase from "firebase/compat/app"
import "firebase/compat/database"

const config = {
    apiKey: "AIzaSyAL1YAnGwS7TS4H3WO9Fm1F7ldA51tIlmM",
    authDomain: "vue-chat-c7f6b.firebaseapp.com",
    databaseURL: "https://vue-chat-c7f6b-default-rtdb.firebaseio.com",
    projectId: "vue-chat-c7f6b",
    storageBucket: "vue-chat-c7f6b.appspot.com",
    messagingSenderId: "972282594880",
    appId: "1:972282594880:web:00609c42aa09445e4cc1a5"
}

const init = firebase.initializeApp(config);

export default init;