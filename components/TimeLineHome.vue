<template>
  <div>
    <v-timeline :dense="$vuetify.breakpoint.smAndDown">
      <v-timeline-item v-for="(n, i) in timelineItems" :key="i">
        <!-- <span slot="opposite">Tus eu perfecto</span> -->
        <v-card class="elevation-2">
          <v-card-title class="text-h5">
            {{ $t(n.titleKey) }}
          </v-card-title>
          <v-card-text>
            {{ $t(n.textKey) }}
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script>
export default {
  computed: {
    timelineItems() {
      return [
        {
          titleKey: 'multilingualTeam',
          textKey: 'multilingualTeamDescription',
        },
        {
          titleKey: 'marketKnowledge',
          textKey: 'marketKnowledgeDescription',
        },
        {
          titleKey: 'personalizedSolutions',
          textKey: 'personalizedSolutionsDescription',
        },
        {
          titleKey: 'expertNetwork',
          textKey: 'expertNetworkDescription',
        },
      ]
    },
  },
}
</script>
