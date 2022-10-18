export function getAwsPdf() {
	var adobeDCView = new AdobeDC.View({
		clientId: `${process.env.ADOBE_API_KEY}`,
		divId: 'adobe-dc-view'
	});

	adobeDCView.previewFile({
		content: {
			location: {
				url: `${process.env.AWS_URI}`
			}
		},

		metaData: { fileName: 'aoa.pdf' }
	});
}
