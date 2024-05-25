// palestine-news.js
document.addEventListener('DOMContentLoaded', function () {
    const newsContainer = document.getElementById('news-container');

    fetch('https://newsapi.org/v2/everything?q=palestine&apiKey=1c1f96b60973420cb3f93f956420b0d9')
        .then(response => response.json())
        .then(data => {
            let output = '';
            data.articles.forEach(article => {
                output += `
                    <div class="news-item">
                        <h3><a href="${article.url}" target="_blank">${article.title}</a></h3>
                        <p>${new Date(article.publishedAt).toLocaleString()}</p>
                        <p>${article.description}</p>
                    </div>
                `;
            });
            newsContainer.innerHTML = output;
        })
        .catch(error => {
            newsContainer.innerHTML = '<p>Failed to load news. Please try again later.</p>';
            console.error('Error fetching news:', error);
        });
});