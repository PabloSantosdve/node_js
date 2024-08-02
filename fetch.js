fetch('http://127.0.0.1:3333/videos', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        title: 'Novo Video',
        description: 'Descrição do novo vídeo',
        duration: 200
    })
})
.then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();
})
.then(data => console.log(data))
.catch(error => console.error('Error:', error));