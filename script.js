function encurtarLink() {
    const url = document.getElementById('url').value.trim();

    if (!url) {
        alert('Insira uma URL válida!');
        return;
    }

    fetch(`https://is.gd/create.php?format=json&url=${encodeURIComponent(url)}`)
    .then(response => response.json())
    .then(data => {
        const resultado = document.getElementById('resultado');
        if (data.shorturl) {
            resultado.innerHTML = `<p>Link encurtado: <a href="${data.shorturl}" target="_blank">${data.shorturl}</a></p>`;
        } else {
            resultado.innerHTML = '<p>Erro ao encurtar o link. Tente novamente.</p>';
        }
    })
    .catch(error => {
        console.error('Erro:', error);
        document.getElementById('resultado').innerHTML = '<p>Erro ao encurtar o link.</p>';
    });
}
