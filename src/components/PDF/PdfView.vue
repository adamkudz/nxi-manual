<template>
	<div id="adobe-dc-view"></div>
</template>

<script>
	import { getAwsPdf } from '../../functions/adobeClient';
	import { previewFile, isValidPDF } from '../../functions/getLocalFile';

	export default {
		name: 'PdfView',
		components: {},
		data: function () {
			return {
				testData: 'testData'
			};
		},
		mounted: function () {}
		// mounted: function () {
		// 	document.addEventListener('adobe_dc_view_sdk.ready', function () {
		// 		var adobeDCView = new AdobeDC.View({
		// 			clientId: ``,
		// 			divId: 'adobe-dc-view'
		// 		});

		// 		adobeDCView.previewFile({
		// 			content: {
		// 				location: {
		// 					url: 'https://nixpdfs.s3.amazonaws.com/aoa.pdf',
		// 					headers: [
		// 						{
		// 							key: 'Access-Control-Allow-Origin',
		// 							value: '*'
		// 						}
		// 					]
		// 				}
		// 			},

		// 			metaData: { fileName: 'aoa.pdf' }
		// 		});
		// 	});
		// }
	};
</script>

<style lang="scss" scoped></style>
