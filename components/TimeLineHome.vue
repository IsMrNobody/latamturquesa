<template>
  <div>
    <v-timeline
      :dense="$vuetify.breakpoint.smAndDown"
    >
      <v-timeline-item
        v-for="(n, i) in lines"
        :key="i"
      >
        <!-- <span slot="opposite">Tus eu perfecto</span> -->
        <v-card class="elevation-2">
          <v-card-title class="text-h5">
            {{ n.title }}
          </v-card-title>
          <v-card-text>
            {{ n.text }}
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lines: [
        {
          title: "Quality and Experience",
          text: "Our team of experts has a deep understanding of the Turkish and Latin American markets with years of experience in creating meaningful connections"
        },
        {
          title: "Customization",
          text: "We tailor our services to meet your specific needs, ensuring that every experience and business opportunity is perfect."
        },
        {
          title: "Network of Contacts",
          text: "Access our extensive network of contacts across both continents to expand your reach and efficiency."
        }
      ]
    }
  },
}
</script>