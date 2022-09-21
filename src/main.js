import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import { initializeApp } from 'firebase/app'

loadFonts()

const firebaseConfig = {
  apiKey: "AIzaSyBOjCQVKA8D0ce4_YB7pls-ThD3LWM6wzE",
  authDomain: "firestoredb-9eb3c.firebaseapp.com",
  projectId: "firestoredb-9eb3c",
  storageBucket: "firestoredb-9eb3c.appspot.com",
  messagingSenderId: "602338246748",
  appId: "1:602338246748:web:14975075efb24586ee2699",
  measurementId: "G-VNDFG86FQL"
  //databaseURL: "https://labfinal1-51b54-default-rtdb.firebaseio.com",
};

initializeApp(firebaseConfig);
createApp(App)
  .use(router)
  .use(vuetify)
  .mount('#app')

  