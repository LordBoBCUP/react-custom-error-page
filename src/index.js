import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import Header from "./Header.jsx";
import { BrowserRouter as Router } from "react-router-dom";


class App extends React.Component {
    render() {
        return (
            <Router>
                <div id="notfound">
                    <div class="notfound">
                        <div class="notfound-404">
                            <h1>:(</h1>
                        </div>
                        <Header />
                        <a href="https://google.com">home page</a>
                    </div>
                </div>
            </Router>
        );
    }
}


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
