document.addEventListener('DOMContentLoaded', function () {
    const rssFeeds = document.getElementById('rss-feeds');

    fetch('https://api.rss2json.com/v1/api.json?rss_url=https://www.techradar.com/rss')
        .then(response => response.json())
        .then(data => {
            let output = '';
            data.items.forEach(item => {
                output += `
                    <div class="rss-item">
                        <h3><a href="${item.link}" target="_blank">${item.title}</a></h3>
                        <p>${item.pubDate}</p>
                        <p>${item.description}</p>
                    </div>
                `;
            });
            rssFeeds.innerHTML = output;
        })
        .catch(error => {
            rssFeeds.innerHTML = '<p>Failed to load news. Please try again later.</p>';
            console.error('Error fetching RSS feed:', error);
        });
});