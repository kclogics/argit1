import React from 'react';
import 'babel-polyfill';
import hydrate  from "react-dom"
import ReactDOMServer from 'react-dom/server';

import App from '../components/App';

const serverRender = () => {
    return ReactDOMServer.renderToString(
        <App />
    );
};

export default serverRender;