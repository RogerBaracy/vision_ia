<template>
  <div class="fixed-center">
    <q-input
      @input="
        (val) => {
          file = val[0];
        }
      "
      filled
      accept=".jpg, .png"
      type="file"
      v-on:change="fileChange"
    />
    <q-card class="my-card">
      <q-card-section horizontal>
        <img id="output" height="400px" width="auto" />
        <q-card-section>
          <TabsInfo v-bind:objects="objects" v-bind:labels="labels"/>
        </q-card-section>
      </q-card-section>
    </q-card>

    <div></div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from "vue-property-decorator";
import TabsInfo from './TabsInfo.vue'
@Component({
  components:{
    TabsInfo
  }
})
export default class UploadComponent extends Vue {
  private file: any = null;
  private labels: Array<any> = [];
  private objects: Array<any> = [];

  @Watch("file")
  fileChange(newValue: any, oldValue: any) {
    this.labels = [];
    this.objects = []
    this.$q.loading.show({
      spinnerColor: "primary",
      spinnerSize: 100,
    });

    // Converte a imagem para base64
    var reader = new FileReader();
    var dataURL;
    reader.onload = function () {
      dataURL = reader.result;
      var output = document.getElementById("output");
      // @ts-ignore
      output.src = dataURL;
    };
    reader.readAsDataURL(newValue);
    setTimeout(() => {
      const src = document.getElementById("output");
      // Bug na Api (Ao enviar no formato Base64 tem que remover conteúdo inicial onde contem as informações sobre a extenção do arquivo)
      const base64 =
        newValue.name.slice(newValue.name.length - 3, newValue.name.length) ===
        "png"
          ? // @ts-ignore
            src.src.slice(22, src.src.length)
          : // @ts-ignore
            src.src.slice(23, src.src.length);
      this.$axios
        .post(
          `https://vision.googleapis.com/v1/images:annotate?key=${process.env.GOOGLE_API_KEY}`,
          {
            requests: [
              {
                image: {
                  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                  content: base64,
                },
                features: [
                  {
                    type: "LABEL_DETECTION",
                    maxResults: 3,
                  },
                  {
                    type: "IMAGE_PROPERTIES",
                    maxResults: 3,
                  },
                  {
                    type: "OBJECT_LOCALIZATION",
                    maxResults: 3,
                  },
                ],
              },
            ],
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          this.labels = response.data.responses[0].labelAnnotations;
          this.objects = response.data.responses[0].localizedObjectAnnotations;
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          this.$q.loading.hide();
        });
    }, 3000);
  }
}
</script>
