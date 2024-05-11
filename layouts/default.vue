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
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app height="90">
      <v-app-bar-nav-icon class="d-flex d-sm-none" @click.stop="drawer = !drawer" />
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
      <v-toolbar-title >
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
          {{ b.title }}
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
      <span>&copy; {{ new Date().getFullYear() }}</span>
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
          title: 'Services',
          icon: 'mdi-apps',
          to: 'services'
        },
        {
          title: 'About us',
          icon: 'mdi-head',
          to: 'about-us'
        },
        {
          title: 'Contact',
          icon: 'mdi-chart-bubble',
          to: 'contact'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'LATAM Turquesa',
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

.bgc {
    background: rgba(255, 255, 255, 0.22);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(7.1px);
    -webkit-backdrop-filter: blur(7.1px);
    border: 1px solid rgba(255, 255, 255, 0.3);
  }
</style>
