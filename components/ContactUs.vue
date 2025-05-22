<template>
  <div>
    <v-img width="100vw" src="/bgmap.png">
      <v-row align="center" justify="center" class="top">
        <v-col cols>
          <v-card width="375" class="mx-auto">
            <!-- <v-img
                src="https://cdn.vuetifyjs.com/images/lists/ali.png"
                height="300px"
                dark
              >
                <v-row class="fill-height">
                  <v-card-title>
                    <v-btn
                      dark
                      icon
                    >
                      <v-icon>mdi-chevron-left</v-icon>
                    </v-btn>

                    <v-spacer></v-spacer>

                    <v-btn
                      dark
                      icon
                      class="mr-4"
                    >
                      <v-icon>mdi-pencil</v-icon>
                    </v-btn>

                    <v-btn
                      dark
                      icon
                    >
                      <v-icon>mdi-dots-vertical</v-icon>
                    </v-btn>
                  </v-card-title>

                  <v-spacer></v-spacer>

                  <v-card-title class="white--text pl-12 pt-12">
                    <div class="text-h4 pl-12 pt-12">
                      Ali Conners
                    </div>
                  </v-card-title>
                </v-row>
              </v-img> -->

            <v-list two-line>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon color="primary">mdi-account</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Volkan Founder</v-list-item-title>
                  <v-list-item-subtitle>
                    <a
                      href="mailto:volkan@latamturquesa.com"
                      class="text-decoration-none"
                      >volkan@latamturquesa.com</a
                    >
                    <br />
                    <span>+90 530 849 15 51</span>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-list-item>
                <v-list-item-icon>
                  <v-icon color="primary">mdi-map-marker</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <p>{{ $t('address') }}</p>
                </v-list-item-content>
              </v-list-item>

              <!-- <v-list-item>
                 <v-list-item-icon>
                   <v-icon color="primary">mdi-account</v-icon>
                 </v-list-item-icon>
                 <v-list-item-content>
                   <v-list-item-title>Gloria</v-list-item-title>
                   <v-list-item-subtitle>
                     <a href="mailto:info@latamturquesa.com" class="text-decoration-none">info@latamturquesa.com</a>
                     <br />
                     <span>+52 55 1473 0198</span>
                   </v-list-item-subtitle>
                 </v-list-item-content>
                </v-list-item> -->
            </v-list>
          </v-card>
        </v-col>

        <v-col cols>
          <FormHome />
        </v-col>
      </v-row>
    </v-img>
  </div>
</template>

<script>
import FormHome from '@/components/FormHome'
export default {
  components: {
    FormHome,
  },
}
</script>

<style scoped>
.cont {
  top: -300px;
}

.v-list-item-title {
  white-space: normal !important;
  overflow: visible !important;
  text-overflow: unset !important;
}
</style>
