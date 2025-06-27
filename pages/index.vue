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
        <h3 class="primary--text display-1">{{ $t('whyChooseUs') }}</h3>
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
  head() {
    const title = this.$t('seo.home.title');
    const description = this.$t('seo.home.description');
    return {
      title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: description,
        },
      ],
    }
  },
}
</script>
