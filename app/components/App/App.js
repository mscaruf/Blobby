import React from 'react';
import { Link } from 'react-router-dom';
import { footer } from '../../styles/global.scss';
import Routes from '../../routes';

const App = () =>
    <div className="container">
        <h1>Blobby</h1>
        { Routes }
        <footer className={footer}>
            <Link to="/">Overview</Link>
            <Link to="/getting-started">Getting started</Link>
            <Link to="/assets">Assets</Link>
            <Link to="/forms">Forms</Link>
            <Link to="/actions">Actions</Link>
            <Link to="/redux">Redux</Link>
            <Link to="/connect">Connect</Link>
        </footer>
    </div>;

export default App;
