//setup react app
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));//actual dom ka kaha par add karna hai this component( = reusable piece of code of UI(html+css structure)) ko
root.render(
<React.StrictMode>
    <App/>
</React.StrictMode>
);