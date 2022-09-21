import firebase from "firebase";
import { ref, onUnmounted } from "vue";

const config = {
  apiKey: "AIzaSyBOjCQVKA8D0ce4_YB7pls-ThD3LWM6wzE",
  authDomain: "firestoredb-9eb3c.firebaseapp.com",
  projectId: "firestoredb-9eb3c",
  storageBucket: "firestoredb-9eb3c.appspot.com",
  messagingSenderId: "602338246748",
  appId: "1:602338246748:web:14975075efb24586ee2699",
  measurementId: "G-VNDFG86FQL"
};
const firebaseApp = firebase.initializeApp(config);

const db = firebaseApp.firestore();
const usersCollection = db.collection("users");

export const createUser = (user) => {
  return usersCollection.add(user);
};

export const getUser = async (id) => {
  const user = await usersCollection.doc(id).get();
  return user.exists ? user.data() : null;
};

export const updateUser = (id, user) => {
  return usersCollection.doc(id).update(user);
};

export const deleteUser = (id) => {
  return usersCollection.doc(id).delete();
};

export const useLoadUsers = () => {
  const users = ref([]);
  const close = usersCollection.onSnapshot((snapshot) => {
    users.value = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  });
  onUnmounted(close);
  return users;
};