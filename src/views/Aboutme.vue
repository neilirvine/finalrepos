<template>
    <v-parallax
  dark
  src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
>
  <v-avatar class="center" size="12rem">
    <v-img
      src="src/assets/img/me.jpg"
      alt="neil"
    ></v-img>
  </v-avatar>
  <v-timeline>
  <v-timeline-item
    color="purple lighten-2"
    fill-dot
    right
  >
    <v-card>
      <v-card-title class="purple lighten-2">
        <v-icon
          dark
          size="42"
          class="mr-3"
        >
          mdi-magnify
        </v-icon>
        <h2 class="display-1 white--text font-weight-light">About Me</h2>
      </v-card-title>
      <v-container>
        <v-layout>
          <v-flex xs10>
            Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit.
          </v-flex>
          <v-flex xs2>
            <v-icon size="64">mdi-calendar-text</v-icon>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-timeline-item>

  <v-timeline-item
    color="amber lighten-1"
    fill-dot
    left
    small
  >
    <v-card>
      <v-card-title class="amber lighten-1 justify-end">
        <h2 class="display-1 mr-3 white--text font-weight-light">School</h2>
        <v-icon
          dark
          size="42"
        >mdi-home-outline</v-icon>
      </v-card-title>
      <v-container>
        <v-layout>
          <v-flex xs8>
            Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit.
          </v-flex>
          <v-flex xs4>
            Lorem ipsum dolor sit amet, no nam oblique veritus.
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-timeline-item>

  <v-timeline-item
    color="cyan lighten-1"
    fill-dot
    right
  >
    <v-card>
      <v-card-title class="cyan lighten-1">
        <v-icon
          class="mr-3"
          dark
          size="42"
        >
          mdi-email-outline
        </v-icon>
        <h2 class="display-1 white--text font-weight-light">Title 3</h2>
      </v-card-title>
      <v-container>
        <v-layout>
          <v-flex
            v-for="n in 3"
            :key="n"
            xs4
          >
            Lorem ipsum dolor sit amet, no nam oblique veritus no nam oblique.
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-timeline-item>

  <v-timeline-item
    color="red lighten-1"
    fill-dot
    left
    small
  >
    <v-card>
      <v-card-title class="red lighten-1 justify-end">
        <h2 class="display-1 mr-3 white--text font-weight-light">Title 4</h2>
        <v-icon
          dark
          size="42"
        >
          mdi-account-multiple-outline
        </v-icon>
      </v-card-title>
      <v-container>
        <v-layout>
          <v-flex xs2>
            <v-icon size="64">mdi-server-network</v-icon>
          </v-flex>
          <v-flex xs10>
            Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus.
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-timeline-item>

  <v-timeline-item
    color="green lighten-1"
    fill-dot
    right
  >
    <v-card>
      <v-card-title class="green lighten-1">
        <v-icon
          class="mr-3"
          dark
          size="42"
        >
          mdi-phone-in-talk
        </v-icon>
        <h2 class="display-1 white--text font-weight-light">Title 5</h2>
      </v-card-title>
      <v-container>
        <v-layout>
          <v-flex>
            Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-timeline-item>
</v-timeline>
</v-parallax>
</template>
<style>
  .center{
    position: absolute;
    background-position: center;
    height: 113px;
      padding: 5px;
      margin: 5px;
  }
</style>
<script>
  export default {
    data: () => ({
      items: [
        {
          color: 'red lighten-2',
          icon: 'mdi-star',
        },
        {
          color: 'purple darken-1',
          icon: 'mdi-book-variant',
        },
        {
          color: 'green lighten-1',
          icon: 'mdi-airballoon',
        },
        {
          color: 'indigo',
          icon: 'mdi-buffer',
        },
      ],
    }),
  }
</script>