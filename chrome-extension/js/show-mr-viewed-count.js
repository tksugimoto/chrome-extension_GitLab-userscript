window.setInterval(() => {
	if (!location.pathname.includes('/-/merge_requests/')) return;
	try {
		const key = location.pathname.replace(/([/]-[/]merge_requests[/][0-9]+).*$/, '$1-file-reviews');
		const viewedCount = Object.keys(JSON.parse(localStorage[key] || '{}')).length;
		const parent = document.querySelector('[data-action="diffs"]');

		const viewedBox = parent.querySelectorAll('span')[1] || document.createElement('span');
		viewedBox.className = 'badge';
		viewedBox.innerText = `(${viewedCount} viewed)`;
		parent.append(viewedBox);
	} catch (e) {}
}, 1000);
