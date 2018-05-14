import React from 'react';
import { Link } from 'react-router-dom';
import { footer } from '../../styles/global.scss';
import Routes from '../../routes';

const App = () =>
    <div>
        <h1>Demo app</h1>
        { Routes }
        <footer className={footer}>
            <Link to="/">Demo app</Link>
            <Link to="/about">About</Link>
        </footer>
    </div>;

export default App;
