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
          src="https://i.pinimg.com/564x/53/f0/d5/53f0d54e87c99ea7b595f5309268ad9d.jpg"
        >
        </v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped></style>
