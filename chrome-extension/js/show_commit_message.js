{
	const privateToken = window.privateTokenMap[location.host];

	const projectId = document.getElementById('search_project_id').value;
	const commitHash = new URL(document.URL).searchParams.get('commit_id');
	const url = `/api/v4/projects/${projectId}/repository/commits/${commitHash}?private_token=${privateToken}`;

	fetch(url).then(res => res.json()).then(json => {
		console.info(json);
		document.title = json.title;

		const commitMessageElement = document.createElement('pre');
		commitMessageElement.innerText = json.message;
		const mrTitleElement = document.querySelector('h2.title');
		mrTitleElement.parentElement.insertBefore(commitMessageElement, mrTitleElement.nextSibling);
	});
}
