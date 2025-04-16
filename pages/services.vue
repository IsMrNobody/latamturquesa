<template>
  <v-container>
    <!-- Header Section -->
    <v-row class="mb-12">
      <v-col cols="12" class="text-center">
        <h1 class="display-2 primary--text mb-3">{{ $t('ourServices') }}</h1>
        <p class="text-body-1 mx-auto" style="max-width: 800px">
          {{ $t('servicesDescription') }}
        </p>
      </v-col>
    </v-row>

    <!-- Main Services Section -->
    <v-row>
      <v-col v-for="(service, i) in services" :key="i" cols="12" class="mb-16">
        <v-row align="center" :class="i % 2 !== 0 ? 'flex-row-reverse' : ''">
          <v-col cols="12" md="6">
            <v-card flat class="transparent py-4">
              <v-card-title class="display-1 primary--text">
                {{ $t(service.titleKey) }}
              </v-card-title>
              <v-card-text class="text-body-1 mt-2">
                {{ $t(service.descriptionKey) }}
              </v-card-text>

              <v-card-text>
                <v-row>
                  <v-col
                    v-for="(feature, j) in service.features"
                    :key="j"
                    cols="12"
                    sm="6"
                  >
                    <div class="d-flex align-center mb-4">
                      <v-icon color="primary" class="mr-3">{{
                        feature.icon
                      }}</v-icon>
                      <span>{{ $t(feature.textKey) }}</span>
                    </div>
                  </v-col>
                </v-row>
              </v-card-text>

              <v-card-actions>
                <v-btn
                  color="primary"
                  outlined
                  rounded
                  to="/contact"
                  class="mt-3"
                >
                  {{ $t('requestInfo') }}
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>

          <v-col cols="12" md="6">
            <v-hover v-slot="{ hover }">
              <v-card
                :elevation="hover ? 12 : 2"
                :class="{ 'on-hover': hover }"
                class="transition-swing service-card mx-auto"
              >
                <v-img
                  :src="service.image"
                  height="350"
                  class="white--text align-end"
                  gradient="to bottom, rgba(0,0,0,0) 60%, rgba(0,0,0,0.8)"
                >
                  <v-card-title class="pb-0 px-6">{{
                    $t(service.titleKey)
                  }}</v-card-title>
                </v-img>
              </v-card>
            </v-hover>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <!-- Call to Action -->
    <v-row class="mt-8 mb-10">
      <v-col cols="12">
        <v-card color="dark" dark class="text-center pa-8 rounded-lg">
          <h2 class="text-h4 mb-4">{{ $t('readyToExpandHorizons') }}</h2>
          <p class="text-body-1 mb-6 mx-auto" style="max-width: 800px">
            {{ $t('teamReadyToHelp') }}
          </p>
          <v-btn x-large outlined color="white" class="mt-2" to="/contact">
            {{ $t('contactUsToday') }}
          </v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'ServicesPage',
  data() {
    return {
      services: [
        {
          titleKey: 'b2bMatchmaking',
          descriptionKey: 'b2bDescription',
          image:
            'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          features: [
            {
              icon: 'mdi-handshake',
              textKey: 'strategicPartners',
            },
            { icon: 'mdi-domain', textKey: 'localDistributors' },
            {
              icon: 'mdi-account-multiple',
              textKey: 'businessNetworking',
            },
            {
              icon: 'mdi-calendar-check',
              textKey: 'businessMeetings',
            },
          ],
        },
        {
          titleKey: 'tourismCulturalExchange',
          descriptionKey: 'tourismDescription',
          image:
            'https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          features: [
            { icon: 'mdi-airplane', textKey: 'businessTrips' },
            {
              icon: 'mdi-translate',
              textKey: 'culturalExchangePrograms',
            },
            { icon: 'mdi-school', textKey: 'interculturalTraining' },
            { icon: 'mdi-map-marker', textKey: 'authenticExperiences' },
          ],
        },
        {
          titleKey: 'salesMarketing',
          descriptionKey: 'salesMarketingDescription',
          image:
            'https://images.pexels.com/photos/6476808/pexels-photo-6476808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          features: [
            {
              icon: 'mdi-chart-line',
              textKey: 'marketEntryStrategies',
            },
            {
              icon: 'mdi-translate',
              textKey: 'contentLocalization',
            },
            { icon: 'mdi-bullhorn', textKey: 'marketingCampaigns' },
            {
              icon: 'mdi-account-group',
              textKey: 'socialMediaManagement',
            },
          ],
        },
        {
          titleKey: 'consulting',
          descriptionKey: 'consultingDescription',
          image:
            'https://images.pexels.com/photos/3153198/pexels-photo-3153198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          features: [
            {
              icon: 'mdi-clipboard-text',
              textKey: 'businessOpportunities',
            },
            {
              icon: 'mdi-book-open-variant',
              textKey: 'localRegulations',
            },
            { icon: 'mdi-check-decagram', textKey: 'strategicPlanning' },
            { icon: 'mdi-finance', textKey: 'investmentEvaluation' },
          ],
        },
        {
          titleKey: 'marketResearch',
          descriptionKey: 'marketResearchDescription',
          image:
            'https://images.pexels.com/photos/7947541/pexels-photo-7947541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          features: [
            { icon: 'mdi-magnify', textKey: 'customMarketStudies' },
            { icon: 'mdi-chart-bar', textKey: 'competitorAnalysis' },
            { icon: 'mdi-account-voice', textKey: 'consumerSurveys' },
            { icon: 'mdi-trending-up', textKey: 'trendIdentification' },
          ],
        },
      ],
    }
  },
  head() {
    return {
      title: this.$t('ourServices') + ' | LATAM TURQUESA',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('servicesDescription'),
        },
      ],
    }
  },
}
</script>

<style scoped>
.service-card {
  max-width: 550px;
  transition: transform 0.3s;
}
.service-card.on-hover {
  transform: translateY(-8px);
}
.v-card.transparent {
  background-color: transparent !important;
  box-shadow: none;
}
</style>
