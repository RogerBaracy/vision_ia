<template>
  <div>
    <q-uploader
        style="max-width: 300px"
        url="http://localhost:4444/upload"
        label="Restricted to images"
        multiple
        accept=".jpg, image/*"
        @rejected="onRejected"
      />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component
export default class UploadComponent extends Vue {
  onRejected (rejectedEntries:Array<any>) {
    // Notify plugin needs to be installed
    // https://quasar.dev/quasar-plugins/notify#Installation
    this.$q.notify({
      type: 'negative',
      message: `${rejectedEntries.length} file(s) did not pass validation constraints`
    })
  }
}
</script>
