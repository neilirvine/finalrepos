<template>
  <nav >
    
      <v-toolbar app >
        
       <v-app-bar-nav-icon @click='toggleDrawer'></v-app-bar-nav-icon>
      <v-toolbar-title >
        <span class="font-weight-light">Neil Irvine Morales</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <!-- dropdown menu -->

      <v-btn flat color="grey" @click="handleSignOut" v-if="isLoggedIn" >
        <span>Sign Out</span>
      </v-btn>
      

      </v-toolbar>
      

     <v-navigation-drawer app v-model="drawer"  v-if="isLoggedIn" >
      <v-list>
              <v-list-item class="px-2">
                <v-list-item-avatar>
                  <v-img src="src/assets/img/me.jpg"></v-img>
                </v-list-item-avatar>
              </v-list-item>
  
              <v-list-item link>
                <v-list-item-content>
                  <v-list-item-title class="title">Morales Neil Irvine</v-list-item-title>
                  <v-list-item-subtitle>mnibmorales@tip.edu.ph</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
  
            <v-divider></v-divider>
       <v-list-item v-for="item in items" :key="item.title" router :to="item.path" :prepend-icon="item.icon">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
          
        </v-list-item>
      
     </v-navigation-drawer>
     
  </nav>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "vue-router";
//import Swal from "sweetalert2";
const router = useRouter();
const isLoggedIn = ref(false);
const drawer = ref(false)

  const  items =  ref([
           { title: 'Dashboard', icon: 'mdi-view-dashboard', path: '/' },
           { title: 'Simple Calculator', icon: 'mdi-plus-one', path: '/basicMath' },
           { title: 'String App', icon: 'mdi-help-box', path: '/stringApp'},
           { title: 'Quiz App', icon: 'mdi-account', path: '/axiosDemoApp'},
           { title: 'Vuetify Research', icon: 'mdi-vuejs', path: '/vuetifyApp'},
           { title: 'About Me', icon: 'mdi-account', path: '/aboutmeApp'},
           { title: 'Apps Explained', icon: 'mdi-account', path: '/appsExplained'},
           { title: 'Create User', icon: 'mdi-account', path: '/userCreate'},
           { title: 'Sign In', icon: 'mdi-account', path: '/signIn'},
        ])

        let auth;
onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true;
      const info = user.email;
      console.log(info);
    } else {
      isLoggedIn.value = false;
      console.log("not logged in");
    }
  });
});
function toggleDrawer() {
  return (drawer.value = !drawer.value);
}
const handleSignOut = () => {
  signOut(auth).then(() => {
    logOutSuccess();
    router.push("/signIn");
  });
};
function logOutSuccess() {
  // Swal.fire({
  //   position: "center",
  //   icon: "success",
  //   title: "You logged out",
  //   text: "Thank you for playing",
  //   showConfirmButton: false,
  //   timer: 3000,
  // });
}

 
</script>