<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="text-center mb-6">
        <h1 class="display-2 primary--text">{{ $t('aboutUsTitle') }}</h1>
      </v-col>

      <v-col cols="12" md="6">
        <h2 class="headline mb-4">{{ $t('strategicPartner') }}</h2>
        <p class="text-body-1">
          {{ $t('aboutUsDescription') }}
        </p>

        <v-row class="mt-6">
          <v-col>
            <v-btn color="primary" large rounded to="/contact">
              {{ $t('contactUs') }}
            </v-btn>
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="12" md="6">
        <v-img
          src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Equipo LATAM TURQUESA"
          class="rounded-lg"
          height="350"
        ></v-img>
      </v-col>

      <v-col cols="12" class="mt-10">
        <v-divider></v-divider>
      </v-col>

      <!-- <v-col cols="12" class="text-center mt-6">
        <h2 class="headline mb-8">{{ $t('ourTeam') }}</h2>

        <v-row justify="center">
          <v-col cols="12" sm="6" md="4" lg="3">
            <v-card class="mx-auto" max-width="300">
              <v-img
                height="250"
                src="https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              ></v-img>
              <v-card-title>Ana Rodríguez</v-card-title>
              <v-card-subtitle>{{ $t('founder') }}</v-card-subtitle>
            </v-card>
          </v-col>

          <v-col cols="12" sm="6" md="4" lg="3">
            <v-card class="mx-auto" max-width="300">
              <v-img
                height="250"
                src="https://images.pexels.com/photos/1586996/pexels-photo-1586996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              ></v-img>
              <v-card-title>Mehmet Yilmaz</v-card-title>
              <v-card-subtitle>{{ $t('regionalDirector') }}</v-card-subtitle>
            </v-card>
          </v-col>

          <v-col cols="12" sm="6" md="4" lg="3">
            <v-card class="mx-auto" max-width="300">
              <v-img
                height="250"
                src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              ></v-img>
              <v-card-title>Carlos Mendoza</v-card-title>
              <v-card-subtitle>{{ $t('operationsDirector') }}</v-card-subtitle>
            </v-card>
          </v-col>
        </v-row>
      </v-col> -->
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'AboutUsPage',
  head() {
    return {
      title: this.$t('aboutUsTitle') + ' | LATAM TURQUESA',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('aboutUsDescription'),
        },
      ],
    }
  },
}
</script>

<style scoped>
.v-card {
  transition: transform 0.3s;
}
.v-card:hover {
  transform: translateY(-5px);
}
</style>
