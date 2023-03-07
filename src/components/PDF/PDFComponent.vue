<template>
    <div class="PDFCONTAINER">
       
        <div>
            <VuePdfEmbed disableTextLayer :source="pdf" />
        </div>
        <div class="backButton">
            <button @click="togglePDF" class="navButton">CLOSE</button>
        </div>
    </div>
</template>

<script>
import VuePdfEmbed from "vue-pdf-embed/dist/vue2-pdf-embed";
export default {
    name: "PDFComponent",
    props: ["selected"],
    data() {
        return {
            pdf: `https://tbmpdf.s3.amazonaws.com/${this.selected.ref[0]}`,
        };
    },
    components: {
        VuePdfEmbed,
    },
    computed: {},
    methods: {
        togglePDF: function () {
            this.$emit("togglePDF");
        },
    },
};
</script>

<style lang="scss" scoped>
.PFDCONTAINER {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.backButton {
    width: 100%;
    display: flex;
    place-content: center;
    button {
        margin-top: 10px;
    }
}
</style>
