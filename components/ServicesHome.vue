<template>
  <v-container class="top">
    <v-row class="ma-4">
      <v-col cols="12">
        <h3 class="display-1 ma-2">Our Services</h3>
      </v-col>
      <v-col v-for="(c, i) in cards" :key="i" cols="12" md="4">
        <v-card flat class="ma-2" outlined>
          <v-img
            height="200"
            :src="c.img">
          </v-img>
          <v-card-title>{{ c.title }}</v-card-title>
          <v-card-text>{{ c.text }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          title: "B2B Matchmaking",
          img: "https://www.matchplat.com/wp-content/uploads/2021/07/CHIARA_2.png",
          text: "We facilitate strategic alliances between Turkish and Latin American companies, helping you find the ideal business partner to expand your operations."
        },
        {
          title: "Consulting",
          img: "https://images.pexels.com/photos/5699482/pexels-photo-5699482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          text: "We provide expert advice on trade, investment, and market development to maximize your operations and performance across both continents."
        },
        {
          title: "Tourism",
          img: "https://images.pexels.com/photos/2087391/pexels-photo-2087391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          text: "Experience the cultural, historical, and natural richness of Turkey and Latin America with our customized tours and unforgettable experiences."
        }
      ]
    }
  },
}
</script>

<style>
.top {
  margin-top: 300px;
  /* margin-bottom: 300px; */
}
</style>