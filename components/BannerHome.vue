<template>
  <div>
    <v-img
      height="100vh"
      width="100vw"
      class="mx-auto"
      src="https://images.pexels.com/photos/295813/pexels-photo-295813.jpeg"
      gradient="to top right, rgba(0,0,0,.4), rgba(0,0,0,.1)"
    >
      <v-img
        class="opa d-none d-sm-flex"
        height="100vh"
        src="/mapa.png"
      ></v-img>
      <v-container class="fill-height">
        <v-row align="center">
          <v-col cols="12" md="8" lg="7">
            <div class="bgc pa-4 pa-md-8">
              <h1 class="main-title text-center text-sm-left">
                LATAM TURQUESA
              </h1>
              <h2 class="subtitle text-center text-sm-left mt-2">
                {{ $t('slogan') }}
              </h2>
              <p class="body-1 mt-4 text-center text-sm-left">
                {{ $t('homeTagline') }}
              </p>
              <div class="mt-6 text-center text-sm-left">
                <nuxt-link to="/services" style="text-decoration: none">
                  <v-btn class="bton" x-large outlined>
                    {{ $t('exploreMore') }}
                  </v-btn>
                </nuxt-link>
              </div>
              <v-img class="d-flex d-sm-none ma-4" src="/mapa.png"></v-img>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-img>
    <!-- <ParallaxHome /> -->
  </div>
</template>

<script>
export default {
  name: 'BannerHome',
}
</script>

<style scoped>
/* It's recommended to import fonts like Montserrat and Lato in your global styles or nuxt.config.js */

.main-title {
  font-family: 'Montserrat', sans-serif;
  font-size: clamp(2.8rem, 7vw, 4.5rem); /* Responsive font size */
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.5px;
  word-break: break-word;
  color: white;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.4);
}

.subtitle {
  font-family: 'Lato', sans-serif;
  font-size: clamp(1.2rem, 3vw, 1.5rem);
  font-weight: 300;
  line-height: 1.3;
  word-break: break-word;
  color: white;
  opacity: 0.9;
}

.body-1 {
  font-family: 'Lato', sans-serif;
  font-size: 1.2rem;
  color: white;
}

.bton {
  border-width: 2px !important;
  color: white;
  border-color: white;
  font-weight: bold;
  letter-spacing: 1px;
  transition: all 0.3s ease;
}

.bton:hover {
  background-color: white;
  color: #1e3a8a; /* A deep, professional blue */
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.bgc {
  background: rgba(0, 0, 0, 0.25); /* Darker glass for better contrast */
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  max-width: 650px;
}

/* The decorative map image */
.opa {
  width: 70%;
  position: absolute;
  mix-blend-mode: soft-light;
  filter: hue-rotate(50%);
  z-index: -1;
  right: 1px;
  opacity: 0.5; /* Reduced opacity for subtlety */
}
</style>
