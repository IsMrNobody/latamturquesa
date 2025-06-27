<template>
  <v-parallax
    dark
    class="top"
    height="350"
    src="https://images.pexels.com/photos/7805635/pexels-photo-7805635.jpeg"
  >
    <v-row align="center" justify="center">
      <v-col class="text-center" cols="12">
        <v-img width="200px" src="/colorlat.png" class="mx-auto"> </v-img>
        <h4 class="subheading">
          {{ $t('slogan') }}
        </h4>
      </v-col>
    </v-row>
  </v-parallax>
</template>
