import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

function Blog(){

    
    
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(function() {
        document.title = "Blog";
        async function getArticles(){
            const request = await fetch('https://api.spaceflightnewsapi.net/v3/articles');
            const response = await request.json();

            setArticles(response);
            setLoading(false);
        }
        getArticles();
    }, []);

    return (
        <section className="section">
            <h1 className="section-title">"News page"</h1>

            {loading && <i>Loading news ...</i>}
            {!loading && (
                <div className="articles">
                    {articles.map(function(article){
                        return (
                            <article key={article.id} className="article">
                                <h2 className="list-article"><Link to={`/blog/${article.id}`}>{article.title}</Link></h2>
                                <time className="article-time">{new Date (article.publishedAt).toLocaleDateString()}</time>
                            </article>
                        )
                    })}
                </div>
            )}
        </section>
    );
 }

 export default Blog;