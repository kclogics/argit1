import React from 'react';
import ReactDOM from 'react-dom';

import App from '../components/App';

// class App extends React.Component {
//     state = {
//         answer: 42,

//     };

//     asyncFunc = () => {
//         return Promise.resolve(40);
//     }

//     async componentDidMount() {
//           this.setState ({
//               answer: await this.asyncFunc()
//           });
//     }
//     render() {
//         return (

//                 <h2>Hello Class Component from index.js-- {this.state.answer}</h2>


//         );
//     }
// }

// export default App;

/***************************** */

        // const App = () => (

        // <h2>Hello React From krish </h2>

        // );


ReactDOM.render(

        <App />,
        document.getElementById('root')

);