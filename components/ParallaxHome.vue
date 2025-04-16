<template>
  <v-parallax
    dark
    class="top"
    height="350"
    src="https://images.pexels.com/photos/41949/earth-earth-at-night-night-lights-41949.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  >
    <v-row align="center" justify="center">
      <v-col class="text-center" cols="12">
        <v-img width="200px" src="/colorlat.png" class="mx-auto"> </v-img>
        <h4 class="subheading">
          {{ $t('buildConnections') }}
        </h4>
      </v-col>
    </v-row>
  </v-parallax>
</template>
