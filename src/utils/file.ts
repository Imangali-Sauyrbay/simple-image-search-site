export const downloadFile = async (src: string, ext: string = 'jpg') => {
    const response = await fetch(src);

    const blob = await response.blob();
    
    const imageUrl = URL.createObjectURL(blob);

	const el = document.createElement("a");
	el.setAttribute("href", imageUrl);
	el.setAttribute("download", 'downloaded.' + ext);

	document.body.appendChild(el);

 	el.click();
	el.remove();

    URL.revokeObjectURL(imageUrl)
}