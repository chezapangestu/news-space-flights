import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

function BlogDetail(){
    const params = useParams();
    const [article, setArticle] = useState({});
    const [loading, setLoading]= useState(true);
    const [notFound, setNotFound]= useState(false);

    useEffect(function(){
        document.title = "Blog Detail";
        async function getArticle(){
            const request = await fetch(`https://api.spaceflightnewsapi.net/v3/articles/${params.id}`);

            if(!request.ok) {
                return setNotFound(true);
            }

            const response = await request.json();

            setArticle(response);
            setLoading(false);
        }
        getArticle();
    }, [params]);

    if(notFound){
        return <h1>Article Not Found. ERROR 404 nginx</h1>
    }

    return (
        <section className="section">
            {loading ? ( 
                <i className="article">Loading articles</i>
            ) : (
            <article>
            <h1 className="article-title">{article.title}</h1>
            <time className="article-time">{new Date(article.publishedAt).toLocaleDateString()}</time>
            <br></br>
            <div className="theImage">
                <img src={article.imageUrl} alt={article.title} className="article-image"></img>
            </div>
            <p className="article-summary">{article.summary}</p>
            <p className="article-source">Source: <a href={article.url} target ="_blank" rel="noreferrer">{article.newsSite}</a></p>
            </article>
            )}
        </section>
    );
}

export default BlogDetail;