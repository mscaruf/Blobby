import React from 'react';
import { Link } from 'react-router-dom';
import * as styles from '../../styles/global.scss';
import Routes from '../../routes';

const App = () =>
    <div className="container">
        <h1>Blobby</h1>
        <div className="walkthrough-content">
          { Routes }
        </div>
        <div className="walkthrough-menu">
          <ul>
            <Link to="/walkthrough/overview"><li>Overview</li></Link>
            <Link to="/walkthrough/getting-started"><li>Getting started</li></Link>
            <Link to="/walkthrough/folder-structure"><li>Folder structure</li></Link>
            <Link to="/walkthrough/styles"><li>Styles</li></Link>
            <Link to="/walkthrough/assets"><li>Assets</li></Link>
            <Link to="/walkthrough/forms"><li>Forms</li></Link>
            <Link to="/walkthrough/actions"><li>Actions</li></Link>
            <Link to="/walkthrough/redux"><li>Redux</li></Link>
            <Link to="/walkthrough/connect"><li>Connect</li></Link>
          </ul>
        </div>
    </div>;

export default App;
