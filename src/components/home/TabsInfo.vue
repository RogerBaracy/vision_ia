<template>
  <q-card >
    <q-tabs
      v-model="tab"
      class="bg-blue-8 text-white"
      align="justify"
      style="min-width:400px"
      narrow-indicator
    >
      <q-tab name="labels" label="Labels" />
      <q-tab name="objetos" label="Objetos" />
    </q-tabs>
    <q-separator />
    <q-tab-panels v-model="tab" animated class="bg-blue-2 text-center">
      <q-tab-panel name="labels">
        <div v-if="labels.length > 0">
          <div v-for="(item, index) in labels" v-bind:key="index">
            <p>Descrição: {{ item.description }}</p>
            <p>Certeza: {{ `${(item.score * 100).toFixed(2)} %` }}</p>
            <hr />
          </div>
        </div>
      </q-tab-panel>

      <q-tab-panel name="objetos" class="bg-blue-2 text-center">
        <div v-if="objects.length > 0">
          <div v-for="(item, index) in objects" v-bind:key="index">
            <p>Nome: {{ item.name }}</p>
            <p>Certeza: {{ `${(item.score * 100).toFixed(2)} %` }}</p>
            <hr />
          </div>
        </div>
      </q-tab-panel>
    </q-tab-panels>
  </q-card>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
@Component
export default class TabsInfo extends Vue {
  @Prop({ type: Array, required: false }) labels?: Array<any> = [];
  @Prop({ type: Array, required: false }) objects?: Array<any> = [];
  private tab: string = "labels";
}
</script>
