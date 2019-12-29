import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import AppChat from './components/AppChat';

ReactDOM.render(<AppChat />, document.getElementById('root'));

serviceWorker.unregister();
