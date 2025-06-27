<template>
  <v-container>
    <v-row class="top" align="center">
      <v-col cols sm="7">
        <v-card color="transparent" flat>
          <v-card-title class="display-1">{{
            $t('connectingRegions')
          }}</v-card-title>
          <v-card-text>
            {{ $t('aboutUsShortDescription') }}
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols sm="5">
        <v-img
          height="300"
          max-width="auto"
          src="https://res.cloudinary.com/dku13l2ep/image/upload/v1750983104/latamturquesa/ChatGPT_Image_26_jun_2025_20_10_48_egokv5.png"
        >
        </v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped></style>
