document.addEventListener('DOMContentLoaded', () => {
    const explore = document.getElementById('explore')
    const name = document.getElementById('name')
    const report = document.getElementById('report')
    const header = document.getElementById('header')
    const result = document.getElementById('result')

    async function listPosts () {
        explore.style.display = "block"
        result.style.display = "none"

        try {
            explore.innerHTML = ""
            const response = await fetch('api/posts')
            const posts = await response.json()

            posts.forEach((post) => {

                const article = document.createElement('article')
                article.classList.add('post')
                article.id = post.id
                article.innerHTML =  `
                    <h2>${post.title}</h2>
                    <p><em>Publicado em ${post.date} por ${post.author}</em></p>
                `

                article.addEventListener('click', (event) => {
                    event.preventDefault()
                    getPost(post.id)
                })

                explore.appendChild(article)
            })
        }
        catch (error){
            console.log("Erro ao listar os posts:", error)
            report.innerHTML = '<h2>Ocorreu um erro na listagem.</h2><p>Não foi possível carregar os dados. Verifique o console para mais detalhes</p>'
        }
    }

    async function getPost(postID) {
        explore.style.display = "none"
        result.style.display = "block"

        try {
            const response = await fetch(`/api/post/${postID}`)
            const data = await response.json()
            name.textContent = data.title
            header.textContent = `Por ${data.author} em ${data.date}`
            report.innerHTML = data.content

            history.pushState({ id: postID }, data.title, `/post/${postID}`)
        }
        catch(error) {
            console.log("Erro ao exibir o post:", error)
            report.innerHTML = '<h2>Ocorreu um erro ao exibir o post.</h2><p>Não foi possível carregar os dados. Verifique o console para mais detalhes</p>'
        }
    }

    window.onpopstate = (event) => {
        if (event.state && event.state.id) {
            getPost(event.state.id)
        } else {
            result.style.display = "none"
            explore.style.display = "block"
        }
    }
    listPosts()
})
