 import React from 'react';


 const styles = {

    article: {
        color:"grey",
        paddingBottom:50,
        marginBottom:10,
        borderBottomStyle:'solid',
        borderBottomColor:'#aaa',
        borderBottomWidth:1
    },
    title: {
        fontWeight:'bold',
        color:'black',
    },
    date: {
        fontSize: "0.85em",
        color:"#888"
    },
    author: {
        paddingTop: 10,
        paddingBottom: 5,

    },
    body: {
        paddingLeft: 20,
    }

 };
 const dateDisplay = (dateString) =>
    new Date(dateString).toDateString();

 const Article = (props) => {

    const { article, actions} = props;
    const author = actions.lookupAuthor(article.authorId);
     return (
         <div style={styles.article}>

            <div style={styles.title}>{article.title}</div>
            <div style={styles.date}>

            {dateDisplay(article.date)}

            </div>


            <div style={styles.author}>

            <a href={author.website}>

            {author.firstName} {author.lastName}s


            </a>

            </div>
             <div style={styles.body}>{article.body}</div>

        </div>

     )
 }

 export default Article;