<template>
  <div>
    <v-img
      width="100vw"
      class="mx-auto"
      src="https://images.pexels.com/photos/22870043/pexels-photo-22870043/free-photo-of-ciudad-puesta-de-sol-punto-de-referencia-edificios.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    >
      <v-img class="opa d-none d-sm-flex" height="100vh" src="/mapa.png"></v-img>
        <v-container>
          <v-row>
            <v-col class="topm">
              <v-card
                class="bgc trasnparent"
                flat
                max-width="600"
              >
                <h1 class="ma-2">Services worldwide</h1>
                <p class="ma-2 display-1">Explore business opportunities, expert consulting, and unique travel experiences.</p>
                <v-card-actions>
                  <v-btn class="bton" x-large outlined>Explore more</v-btn>
                </v-card-actions>
              <v-img
                class="d-flex d-sm-none ma-4"
                src="/mapa.png">
              </v-img>
              </v-card>
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
  h1 {
    font-size: 80px;
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
    /* border-radius: 16px; */
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(7.1px);
    -webkit-backdrop-filter: blur(7.1px);
    border: 1px solid rgba(255, 255, 255, 0.3);
  }
</style>