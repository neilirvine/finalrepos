<template>
    <v-parallax
    dark
    src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
  >
    <v-container fluid class="">
        <h1 class="text-center font-weight-bold text-h1 mt-16 mb-10 text-white">
            Sign In
        </h1>
        <v-card color="brown-lighten-5" class="border-rounded mx-auto" style="width: 600px">
            <v-container>
                <v-card-text class="text-body-1 font-weight-bold mb-5">
                    Log in your email and password to start using the app</v-card-text>
                <v-text-field type="text" placeholder="Email" v-model="email"></v-text-field>
                <v-text-field type="password" placeholder="Password" v-model="password"></v-text-field>
                <v-container bg fill-height grid-list-md text-xs-center>
                    <v-layout row wrap align-center>
                <v-btn @click="signin" class="text-white me-3" color="blue-grey-darken-1">Sign in</v-btn>
                <v-btn @click="register" class="text-white me-3" color="blue-grey-darken-1">register</v-btn>
            </v-layout>
            </v-container>
            </v-container>
        </v-card>
    </v-container>
    </v-parallax>
</template>
<script setup>
import { ref } from "vue";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, addDoc, setDoc, doc } from "firebase/firestore";
import { useRouter } from "vue-router";
//import Swal from "sweetalert2";
const email = ref("");
const password = ref("");
const router = useRouter();
const db = getFirestore();
const userRef = collection(db, "users");
function signin() {
    signInWithEmailAndPassword(getAuth(), email.value, password.value)
        .then((data) => {
            addDoc(userRef, { email: email.value, score: 0 });
            setDoc(doc(db, "users", email.value), { email: email.value, score: 0 });
            console.log(userRef.id);

            router.push("/axiosDemoApp");
        })
        .catch((error) => {

        });
}
function register(){
    router.push("/userCreate")
}
</script>
<style scoped>

</style>