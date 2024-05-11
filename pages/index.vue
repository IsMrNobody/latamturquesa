<template>
  <v-row justify="center" align="center">
    <BannerHome />
    <AboutUs />
    <v-col>
      <ParallaxHome />
    </v-col>
    <ServicesHome />
    <v-col class="top">
      <v-col cols="12" align="center">
        <h3 class="primary--text display-1">Why Choose Us</h3>
      </v-col>
      <TimeLineHome />
    </v-col>
    <v-col cols="12" align="center">
      <LatamLogo />
    </v-col>
    <ContactUs />
  </v-row>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>
