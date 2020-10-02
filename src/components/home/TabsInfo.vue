<template>
  <q-card>
    <q-tabs
      v-model="tab"
      class="bg-blue-8 text-white"
      align="justify"
      style="min-width: 400px"
      narrow-indicator
    >
      <q-tab name="labels" label="Labels" />
      <q-tab name="objetos" label="Objetos" />
      <q-tab name="cores" label="Cores" />
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

      <q-tab-panel name="cores" class="bg-blue-2 text-center">
        <div v-if="colors.length > 0">
          <div
            class="column items-center"
            v-for="(item, index) in colors"
            v-bind:key="index"
          >
            <div class="col">
              <div v-bind:style="color(index)"></div>
              <p>{{ `${(item.score * 100).toFixed(2)} %` }}</p>              
            </div>
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
  @Prop({ type: Array, required: false }) colors?: Array<any> = [];
  private tab: string = "labels";

  private color(c: number) {
    // @ts-ignore
    let colors = this.colors[c].color;
    switch (c) {
      case 0:
        return {
          "background-color": `rgb(${colors.red ? colors.red : 0}, ${
            colors.green ? colors.green : 0
          }, ${colors.blue ? colors.blue : 0})`,

          height: "120px",
          width: "120px",
          "border-radius": "50%",
        };
      case 1:
        return {
          "background-color": `rgb(${colors.red ? colors.red : 0}, ${
            colors.green ? colors.green : 0
          }, ${colors.blue ? colors.blue : 0})`,

          height: "60px",
          width: "60px",
          "border-radius": "50%",
        };
      case 2:
        return {
          "background-color": `rgb(${colors.red ? colors.red : 0}, ${
            colors.green ? colors.green : 0
          }, ${colors.blue ? colors.blue : 0})`,

          height: "30px",
          width: "30px",
          "border-radius": "50%",
        };
    }
  }
}
</script>
