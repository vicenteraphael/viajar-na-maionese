document.addEventListener('DOMContentLoaded', () => {
    const titles = document.querySelectorAll('h2')
    const name = document.getElementById('name')
    const report = document.getElementById('report')
    const header = document.getElementById('header')
    //const explore = document.getElementById('explore')

    titles.forEach(title => {
        title.addEventListener('click', () => {
            // explore.style.display = "none"

            const postID = title.dataset.id

            fetch(`/${postID}`)

            .then(response => {
                if (!response.ok) {
                    throw new Error("A resposta da rede foi bem sucedida.")
                }
                return response.json()
            })

            .then(data => {
                name.textContent = data.title
                header.textContent = `Por ${data.author} em ${data.date}`
                report.innerHTML = data.content
            })

            .catch(error => {
                console.log("Erro ao buscar o post:", error)
                report.innerHTML = '<h2>Ocorreu um erro.</h2><p>Não foi possível carregar os dados. Verifique o console para mais detalhes</p>'
            })
        })
    })
})