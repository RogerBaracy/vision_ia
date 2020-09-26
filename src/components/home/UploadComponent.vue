<template>
  <div>
    <q-input
        @input="val => { file = val[0] }"
        filled
        accept=".jpg, image/*"
        type="file"
      />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator'
import vision from '@google-cloud/vision'
@Component
export default class UploadComponent extends Vue {
  private client = new vision.ImageAnnotatorClient()  
  private file : any = null

  @Watch('file')
  fileChange (newValue:any, oldValue:any) {
    console.log(newValue)
    // this.client.labelDetection(newValue).then(result => {
    //   // @ts-ignore
    //   const labels = result.labelAnnotations
    //   console.log('Labels:')
    //   labels.forEach( (label:any) => console.log(label.description))
    // })  
  }
}
</script>
