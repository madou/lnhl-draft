import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './view/App';
import * as serviceWorker from './serviceWorker';

const root = (ReactDOM as any).createRoot(document.getElementById('root'));
root.render(<App />);

// ReactDOM.render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
//   document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
