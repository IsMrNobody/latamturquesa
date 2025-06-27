<template>
  <v-container class="top">
    <v-row class="ma-4">
      <v-col cols="12">
        <h3 class="display-1 ma-2">{{ $t('ourServices') }}</h3>
      </v-col>
      <v-col v-for="(c, i) in services" :key="i" cols="12" md="4">
        <v-card flat class="ma-2" outlined>
          <v-img height="200" :src="c.img"> </v-img>
          <v-card-title>{{ $t(c.titleKey) }}</v-card-title>
          <v-card-text>{{ $t(c.descriptionKey) }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  computed: {
    services() {
      return [
        {
          titleKey: 'b2bMatchmaking',
          img: 'https://www.matchplat.com/wp-content/uploads/2021/07/CHIARA_2.png',
          descriptionKey: 'b2bDescription',
        },
        {
          titleKey: 'tourismCulturalExchange',
          img: 'https://images.pexels.com/photos/14555786/pexels-photo-14555786.jpeg',
          descriptionKey: 'tourismDescription',
        },
        {
          titleKey: 'salesMarketing',
          img: 'https://images.pexels.com/photos/4195409/pexels-photo-4195409.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          descriptionKey: 'salesMarketingDescription',
        },
        {
          titleKey: 'consulting',
          img: 'https://images.pexels.com/photos/5699482/pexels-photo-5699482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          descriptionKey: 'consultingDescription',
        },
        {
          titleKey: 'marketResearch',
          img: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          descriptionKey: 'marketResearchDescription',
        },
      ]
    },
  },
}
</script>

<style>
.top {
  margin-top: 140px;
  /* margin-bottom: 300px; */
}
</style>
