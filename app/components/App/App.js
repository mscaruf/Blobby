import React from 'react';
import { Link } from 'react-router-dom';
import * as styles from '../../styles/global.scss';
import Routes from '../../routes';

const App = () =>
    <div className="container">
        <h1>Blobby</h1>
        { Routes }
        <footer>
            <Link to="/walkthrough/overview">Overview</Link>
            <Link to="/walkthrough/getting-started">Getting started</Link>
            <Link to="/walkthrough/folder-structure">Folder structure</Link>
            <Link to="/walkthrough/styles">Styles</Link>
            <Link to="/walkthrough/assets">Assets</Link>
            <Link to="/walkthrough/forms">Forms</Link>
            <Link to="/walkthrough/actions">Actions</Link>
            <Link to="/walkthrough/redux">Redux</Link>
            <Link to="/walkthrough/connect">Connect</Link>
        </footer>
    </div>;

export default App;
