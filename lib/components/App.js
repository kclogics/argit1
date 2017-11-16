import React from 'react';
import ArticleList from './ArticleList';
import DataApi from '../DataApi';
import { data } from '../testData';





const api = new DataApi(data);


class App extends React.Component {
    constructor() {
        super();
        this.state = {
                articles: api.getArticles(),
                authors: api.getAuthors()
        };
               // console.log(this.state);
    }

    articleActions = {

        lookupAuthor: authorId => this.state.authors[authorId]


    };


    render() {
        return (



        // <div>...from the App.js</div>

            <ArticleList
            articles= {this.state.articles}
            articleActions ={this.articleActions}
            //authors={this.state.authors}


            />

         );
    }
}

export default App;
