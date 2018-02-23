import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './adminComponent/Nav';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Nav />, document.getElementById('root'));
registerServiceWorker();