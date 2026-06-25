async function loadArticles() {
    const response = await fetch("https://xenospectrum.com/api/v1/entities/company/nvidia");
    const json = await response.json();
    const articles = json.data.relatedArticles;
    let html = '';

    const ul = document.getElementById("ul_news");
    html = articles.map(article => `
        <li>
        <a href="${article.url}" target="_blank">${article.title}</a>
        <span>${new Date(article.publishedAt).toLocaleDateString("ja-JP")}</span>
        </li>`).join("");
    ul.innerHTML = html;
}