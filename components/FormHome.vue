<template>
  <v-card width="400" class="pa-2 mb-10 mx-auto">
    <v-col>
      <p>Connect with us today</p>
    </v-col>
    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
    >

      <v-col>
        <v-text-field
          v-model="name"
          :counter="10"
          :rules="nameRules"
          label="Name"
          required
        ></v-text-field>

        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          required
        ></v-text-field>
      </v-col>

      <v-col>
        <v-textarea
          outlined
          name="input-7-4"
          label="Outlined textarea"
          value="Hello Latam Turquesa!"
        ></v-textarea>
      </v-col>

      <!-- <v-checkbox
        v-model="checkbox"
        :rules="[v => !!v || 'You must agree to continue!']"
        label="Do you agree?"
        required
      ></v-checkbox> -->

      <v-btn
        :disabled="!valid"
        color="cyan"
        outlined
        class="mr-4"
        block
        @click="validate"
      >
        Send
      </v-btn>
    </v-form>
  </v-card>
</template>

<script>
  export default {
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      select: null,
      items: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
      ],
      checkbox: false,
    }),

    methods: {
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    },
  }
</script>
