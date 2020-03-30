<template>
  <div>
    <pdf src="./public/docs/PDFs/adc.pdf"></pdf>
    <img
      src="https://flytbmpublicbucket.s3.amazonaws.com/thumbnails/pdf_thumbnails/efis_40_pg.jpg"
      alt=""
    />
  </div>
</template>

<script>
import pdf from "vue-pdf";
export default {
  name: "PdfIframe",
  components: {
    pdf
  }
};
</script>

<style lang="scss" scoped></style>
