<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      class="bgc"
      :clipped="clipped"
      fixed
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in navbaritem"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ $t(item.title) }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <!-- Selector de idioma en el drawer móvil -->
        <v-list-item>
          <v-list-item-action>
            <v-icon>mdi-translate</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-select
              v-model="$i18n.locale"
              :items="languages"
              item-text="name"
              item-value="code"
              dense
              outlined
              hide-details
            ></v-select>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app height="90">
      <v-app-bar-nav-icon
        class="d-flex d-sm-none"
        @click.stop="drawer = !drawer"
      />
      <v-spacer />
      <!-- <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn> -->
      <!-- <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>mdi-application</v-icon>
      </v-btn>
      <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>mdi-minus</v-icon>
      </v-btn> -->
      <!-- <v-spacer class="d-flex d-sm-none" /> -->
      <v-toolbar-title>
        <nuxt-link to="/">
          <v-img class="ml-4" src="/logolatamtext.png"></v-img>
        </nuxt-link>
      </v-toolbar-title>
      <v-spacer />
      <div class="d-none d-sm-flex">
        <v-btn
          v-for="(b, i) in navbaritem"
          :key="i"
          class="ma-2 butons"
          :to="b.to"
          elevation="0"
          text
        >
          {{ $t(b.title) }}
        </v-btn>
        <!-- <a class="enla" text>
          Services
        </a>
        <a class="enla" text>
          About Us
        </a>
        <a class="enla" text>
          Contact
        </a> -->
      </div>

      <!-- Selector de idioma en la barra de navegación -->
      <v-menu offset-y transition="slide-y-transition" bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn class="ma-2 language-btn" text v-bind="attrs" v-on="on">
            <v-icon left>mdi-translate</v-icon>
            <!-- {{ currentLanguageName }} -->
            <v-icon right>mdi-chevron-down</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(language, index) in languages"
            :key="index"
            @click="changeLanguage(language.code)"
          >
            <v-list-item-title>{{ language.name }}</v-list-item-title>
            <v-list-item-avatar right>
              <v-avatar size="20">
                <img :src="language.flag" :alt="language.name" />
              </v-avatar>
            </v-list-item-avatar>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item @click="reloadPage">
            <v-list-item-icon>
              <v-icon>mdi-refresh</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ $t('reloadPage') }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-spacer />
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light> mdi-repeat </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer :absolute="!fixed" app>
      <span>Latam Turquesa &copy; {{ new Date().getFullYear() }}</span>
      <v-spacer></v-spacer>
      <!-- <div class="px-4">
        <span>{{ $t('language') }}: </span>
        <v-btn
          v-for="lang in languages"
          :key="lang.code"
          text
          small
          class="mx-1"
          @click="changeLanguage(lang.code)"
          :class="{ 'primary--text': $i18n.locale === lang.code }"
        >
          {{ lang.name }}
        </v-btn>
      </div> -->
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      navbaritem: [
        {
          title: 'services',
          icon: 'mdi-apps',
          to: 'services',
        },
        {
          title: 'aboutUs',
          icon: 'mdi-head',
          to: 'about-us',
        },
        {
          title: 'contact',
          icon: 'mdi-chart-bubble',
          to: 'contact',
        },
      ],
      languages: [
        {
          code: 'es',
          name: 'Español',
          flag: 'https://flagcdn.com/w20/es.png',
        },
        {
          code: 'en',
          name: 'English',
          flag: 'https://flagcdn.com/w20/us.png',
        },
        {
          code: 'tr',
          name: 'Türkçe',
          flag: 'https://flagcdn.com/w20/tr.png',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'LATAM Turquesa',
    }
  },
  computed: {
    currentLanguageName() {
      const lang = this.languages.find(
        (lang) => lang.code === this.$i18n.locale
      )
      return lang ? lang.name : 'English'
    },
  },
  methods: {
    changeLanguage(code) {
      // Solo cambiar si es diferente al actual
      if (code !== this.$i18n.locale) {
        const oldLocale = this.$i18n.locale
        this.$i18n.locale = code
        localStorage.setItem('userLanguage', code)

        // Activar el evento de cambio de idioma
        if (this.$i18n.onLanguageSwitched) {
          this.$i18n.onLanguageSwitched(oldLocale, code)
        }
      }
    },
    reloadPage() {
      window.location.reload()
    },
  },
  mounted() {
    // Recuperar el idioma guardado o usar el idioma del navegador
    const savedLanguage = localStorage.getItem('userLanguage')
    if (savedLanguage) {
      this.$i18n.locale = savedLanguage
    } else {
      // Obtener el idioma del navegador
      const browserLang = navigator.language.split('-')[0]
      const availableLangs = this.languages.map((l) => l.code)
      // Si el idioma del navegador está disponible, usarlo
      if (availableLangs.includes(browserLang)) {
        this.$i18n.locale = browserLang
      }
    }
  },
}
</script>

<style scoped>
.enla {
  margin-left: 40px;
  color: white;
}

.butons:hover {
  color: cyan;
}

.language-btn {
  min-width: 120px;
}

.bgc {
  background: rgba(255, 255, 255, 0.22);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(7.1px);
  -webkit-backdrop-filter: blur(7.1px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}
</style>
