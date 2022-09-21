<template>
<v-app id="inspire">
     <v-parallax
    dark
    src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
  >
      <v-content>
         <v-container fluid fill-height>
            <v-layout align-center justify-center>
               <v-card class="border-rounded mx-auto" style="width: 1500px">
                     <v-card-text>
                        <v-form>
                          <v-toolbar dark color="primary">
                        <v-toolbar-title>String App</v-toolbar-title>
                     </v-toolbar>
                     <br>

   <v-text-field label="Enter word" v-model="text"></v-text-field>


   <v-btn @click="outcome" >
        Results
   </v-btn>
<br><br>
     
Vowels: {{ vowels }} <br>
                         Numbers: {{ num }} <br>
                         Consonants: {{ cons }} <br>
                         Modified: {{ conv }} <br>


</v-form>
                     </v-card-text>
                     </v-card>

            </v-layout>
         </v-container>
      </v-content>
     </v-parallax>
   </v-app>
 

</template>

<script setup>
import { ref } from 'vue'

const text = ref()
const vowels = ref(0)
const num = ref(0)
const cons = ref(0)
const conv = ref()

function outcome() {
     vowels.value = text.value.match(/[aeiou]/gi).length; // match to AEIOU
     num.value = text.value.match(/\d/g)?.length || 0; //match to digits otherwise 0
     cons.value = text.value.match(/[bcdfghjklmnpqrstvwxyz]/gi).length; //match to consonant
     conv.value = text.value.replace(/[aeiou]/gi, '*');
     return vowels.value, num.value, cons.value, conv.value
}


</script>
