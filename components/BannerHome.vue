<template>
  <div>
    <v-img
      width="100vw"
      class="mx-auto"
      src="https://images.pexels.com/photos/22870043/pexels-photo-22870043/free-photo-of-ciudad-puesta-de-sol-punto-de-referencia-edificios.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    >
      <v-img
        class="opa d-none d-sm-flex"
        height="100vh"
        src="/mapa.png"
      ></v-img>
      <v-container>
        <v-row>
          <v-col class="topm">
            <div class="bgc">
              <v-card class="transparent" flat max-width="600">
                <h1 class="main-title text-center text-sm-left ma-2 pa-2">
                  LATAM TURQUESA
                </h1>
                <p class="ma-2 display-1">
                  {{ $t('homeTagline') }}
                </p>
                <v-card-actions>
                  <v-btn class="bton" x-large outlined>{{
                    $t('exploreMore')
                  }}</v-btn>
                </v-card-actions>
                <v-img class="d-flex d-sm-none ma-4" src="/mapa.png"> </v-img>
              </v-card>
            </div>
          </v-col>
          <!-- <v-col align="center">
              <v-img class="d-flex d-sm-none" height="100vh" src="/mapa.png"></v-img>
            </v-col> -->
        </v-row>
      </v-container>
    </v-img>
    <!-- <ParallaxHome /> -->
  </div>
</template>

<style scoped>
.bton :hover {
  color: cyan;
}
.main-title {
  font-size: 80px;
  font-weight: bold;
  line-height: 1.2;
  word-break: break-word;
}
@media (max-width: 600px) {
  .main-title {
    font-size: 50px;
  }
}
@media (max-width: 400px) {
  .main-title {
    font-size: 40px;
  }
}
.opa {
  /* opacity: 0.7; */
  width: 70%;
  position: absolute;
  mix-blend-mode: soft-light;
  filter: hue-rotate(50%);
  /* background-color: cyan; */
  z-index: -1;
  right: 1px;
}
.topm {
  margin-top: 30px;
}
.bgc {
  background: rgba(255, 255, 255, 0.22);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(7.1px);
  -webkit-backdrop-filter: blur(7.1px);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  max-width: 600px;
}
</style>
