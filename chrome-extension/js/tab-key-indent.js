document.body.addEventListener('keydown', event => {
	if (event.key === 'Tab' && event.target.tagName === 'TEXTAREA') {
		document.execCommand('insertText', /* ShowDefaultUI = */ false, '\t');
		event.preventDefault();
	}
});
