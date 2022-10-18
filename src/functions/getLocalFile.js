export function previewFile(filePromise, fileName) {
	/* Initialize the AdobeDC View object */
	var adobeDCView = new AdobeDC.View({
		/* Pass your registered client id */
		clientId: '',
		/* Pass the div id in which PDF should be rendered */
		divId: 'adobe-dc-view'
	});

	/* Invoke the file preview API on Adobe DC View object */
	adobeDCView.previewFile(
		{
			/* Pass information on how to access the file */
			content: {
				/* pass file promise which resolve to arrayBuffer */
				promise: filePromise
			},
			/* Pass meta data of file */
			metaData: {
				/* file name */
				fileName: fileName
			}
		},
		{}
	);
}

/* Helper function to check if selected file is PDF or not. */
export function isValidPDF(file) {
	if (file.type === 'application/pdf') {
		return true;
	}
	if (file.type === '' && file.name) {
		var fileName = file.name;
		var lastDotIndex = fileName.lastIndexOf('.');
		return !(
			lastDotIndex === -1 ||
			fileName.substr(lastDotIndex).toUpperCase() !== 'PDF'
		);
	}
	return false;
}
