<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />
        <q-toolbar-title>
          Reconhecimento de imagens
        </q-toolbar-title>
        <div>Google Vision-IA</div>
      </q-toolbar>
    </q-header>
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
const linksData = [
  {
    title: 'Projeto usando Api Rest',
    caption: 'github.com/RogerBaracy/vision_ia',
    icon: 'code',
    link: 'https://github.com/RogerBaracy/vision_ia',
    intern: false
  },
  {
    title: 'Exemplo usando Api Rest',
    caption: 'vision-ia.surge.sh',
    icon: 'code',
    link: 'http://vision-ia.surge.sh',
    intern: false
  },
  {
    title: 'Projeto usando library',
    caption: 'https://github.com/igorcemim/google-cloud-vision-api-exemplos',
    icon: 'code',
    link: 'https://github.com/igorcemim/google-cloud-vision-api-exemplos',
    intern: false
  }
]
import EssentialLink from 'components/menu/EssentialLink.vue'
import { Vue, Component } from 'vue-property-decorator'

@Component({
  components: { EssentialLink }
})
export default class MainLayout extends Vue {
  leftDrawerOpen = false;
  essentialLinks = linksData;
}
</script>
