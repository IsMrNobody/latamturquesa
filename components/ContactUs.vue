<template>
  <div>   
    <v-img
      width="100vw"
      src="/bgmap.png"
      > 
        <v-row
          align="center" 
          justify="center"
          class="top"
        >      
          <v-col cols>
            <v-card
              max-width="375"
              class="mx-auto"
            >
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
                    <v-icon color="primary">
                      mdi-phone
                    </v-icon>
                  </v-list-item-icon>

                  <v-list-item-content>
                    <v-list-item-title>(+90) 530 849 15 51</v-list-item-title>
                    <v-list-item-subtitle>Mobile</v-list-item-subtitle>
                  </v-list-item-content>

                  <v-list-item-icon>
                    <v-icon>mdi-message-text</v-icon>
                  </v-list-item-icon>
                </v-list-item>

                <v-list-item>
                  <v-list-item-action></v-list-item-action>

                  <v-list-item-content>
                    <v-list-item-title>(+57) 3104251095</v-list-item-title>
                    <v-list-item-subtitle>Work</v-list-item-subtitle>
                  </v-list-item-content>

                  <v-list-item-icon>
                    <v-icon>mdi-message-text</v-icon>
                  </v-list-item-icon>
                </v-list-item>

                <v-divider inset></v-divider>

                <v-list-item>
                  <v-list-item-icon>
                    <v-icon color="primary">
                      mdi-email
                    </v-icon>
                  </v-list-item-icon>

                  <v-list-item-content>
                    <v-list-item-title>latamturquesa@gmail.com</v-list-item-title>
                    <v-list-item-subtitle>Work</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>

                <!-- <v-list-item>
                  <v-list-item-action></v-list-item-action>

                  <v-list-item-content>
                    <v-list-item-title>latamturquesa@gmail.com</v-list-item-title>
                    <v-list-item-subtitle>Work</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item> -->

                <v-divider inset></v-divider>

                <v-list-item>
                  <v-list-item-icon>
                    <v-icon color="primary">
                      mdi-map-marker
                    </v-icon>
                  </v-list-item-icon>

                  <v-list-item-content>
                    <v-list-item-title>1400 Main Street</v-list-item-title>
                    <v-list-item-subtitle>Turquia, FL 79938</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
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
    FormHome
  }
}
</script>

<style scoped>
.cont {
  top: -300px;
}
</style>