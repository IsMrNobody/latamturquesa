<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="text-center mb-6">
        <h1 class="display-2 primary--text">{{ $t('contactTitle') }}</h1>
      </v-col>

      <v-col cols="12" md="6">
        <h2 class="headline mb-4">{{ $t('letsStartConversation') }}</h2>
        <p class="text-body-1 mb-6">
          {{ $t('readyToExplore') }}<br />
          {{ $t('fillForm') }}
        </p>

        <v-list>
          <v-list-item>
            <v-list-item-icon>
              <v-icon color="primary">mdi-email</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ $t('email') }}</v-list-item-title>
              <v-list-item-subtitle>
                <a
                  href="mailto:info@latamturquesa.com"
                  class="text-decoration-none"
                  >info@latamturquesa.com</a
                >
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon color="primary">mdi-phone</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ $t('phoneWhatsApp') }}</v-list-item-title>
              <v-list-item-subtitle>+90 xxx xxx xx xx</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <div class="mt-6">
          <h3 class="subtitle-1 mb-3">{{ $t('followUs') }}</h3>
          <v-btn icon color="primary" href="#" target="_blank" class="mr-2">
            <v-icon>mdi-linkedin</v-icon>
          </v-btn>
          <v-btn icon color="primary" href="#" target="_blank">
            <v-icon>mdi-instagram</v-icon>
          </v-btn>
        </div>
      </v-col>

      <v-col cols="12" md="6">
        <v-card class="elevation-2 pa-6">
          <h3 class="subtitle-1 mb-4">{{ $t('contactForm') }}</h3>

          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
              v-model="name"
              :rules="nameRules"
              :label="$t('name')"
              required
              outlined
              dense
            ></v-text-field>

            <v-text-field
              v-model="email"
              :rules="emailRules"
              :label="$t('email')"
              required
              outlined
              dense
            ></v-text-field>

            <v-select
              v-model="service"
              :items="services"
              :label="$t('serviceInterest')"
              outlined
              dense
            ></v-select>

            <v-textarea
              v-model="message"
              :rules="messageRules"
              :label="$t('message')"
              required
              outlined
              auto-grow
              rows="4"
            ></v-textarea>

            <v-checkbox
              v-model="terms"
              :rules="termsRules"
              :label="$t('privacyPolicy')"
              required
            ></v-checkbox>

            <v-btn
              color="primary"
              :disabled="!valid"
              class="mr-4"
              @click="submitForm"
            >
              {{ $t('sendMessage') }}
            </v-btn>
          </v-form>

          <v-snackbar v-model="snackbar" :timeout="3000" color="success">
            {{ snackbarText }}
            <template v-slot:action="{ attrs }">
              <v-btn text v-bind="attrs" @click="snackbar = false">
                {{ $t('close') }}
              </v-btn>
            </template>
          </v-snackbar>
        </v-card>
      </v-col>
    </v-row>

    <v-row class="mt-12">
      <v-col cols="12">
        <v-card flat class="pa-0">
          <v-img
            src="https://images.pexels.com/photos/31647351/pexels-photo-31647351/free-photo-of-luna-llena-sobre-la-mezquita-de-suleymaniye-estambul.jpeg"
            height="300"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
          >
            <v-container fill-height>
              <v-row align="center" justify="center">
                <v-col class="text-center" cols="12">
                  <div class="text-h4 white--text">
                    {{ $t('readyToConnect') }}
                  </div>
                  <div class="text-subtitle-1 white--text mt-2">
                    {{ $t('contactToExplore') }}
                  </div>
                </v-col>
              </v-row>
            </v-container>
          </v-img>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'ContactPage',
  data() {
    return {
      valid: true,
      name: '',
      nameRules: [(v) => !!v || this.$t('name') + ' ' + this.$t('isRequired')],
      email: '',
      emailRules: [
        (v) => !!v || this.$t('email') + ' ' + this.$t('isRequired'),
        (v) => /.+@.+\..+/.test(v) || this.$t('emailMustBeValid'),
      ],
      service: '',
      message: '',
      messageRules: [
        (v) => !!v || this.$t('message') + ' ' + this.$t('isRequired'),
        (v) => v.length >= 10 || this.$t('messageMustBeAtLeast10Chars'),
      ],
      terms: false,
      termsRules: [(v) => !!v || this.$t('mustAcceptPrivacyPolicy')],
      snackbar: false,
      snackbarText: this.$t('messageSent'),
    }
  },
  computed: {
    services() {
      return [
        this.$t('b2bMatchmaking'),
        this.$t('tourismCulturalExchange'),
        this.$t('salesMarketing'),
        this.$t('consulting'),
        this.$t('marketResearch'),
        this.$t('other'),
      ]
    },
  },
  head() {
    return {
      title: this.$t('contactTitle') + ' | LATAM TURQUESA',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('contactDescription'),
        },
      ],
    }
  },
  methods: {
    submitForm() {
      if (this.$refs.form.validate()) {
        // Aquí iría la lógica para enviar el formulario
        this.snackbar = true
        this.$refs.form.reset()
      }
    },
  },
}
</script>

<style scoped>
.v-btn {
  text-transform: none;
}
</style>
