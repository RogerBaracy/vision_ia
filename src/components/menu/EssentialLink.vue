<template>
  <q-item clickable tag="a" v-on:click="redirect()">
    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" />
    </q-item-section>
    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
@Component({})
export default class EssentialLink extends Vue {
  @Prop({ type: String, required: true }) title!: string;
  @Prop({ type: String, default: '#' }) link?: string;
  @Prop({ type: String, default: '' }) icon?: string;
  @Prop({ type: Boolean, default: true}) intern?: boolean
  private redirect () : void{
    this.intern == true
    ? this.$router.push({ path: `/${this.link}` })
    : window.open(this.link, '_blank')
  }
}
</script>
