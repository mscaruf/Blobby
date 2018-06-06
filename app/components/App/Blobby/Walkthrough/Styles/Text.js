import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Text extends React.Component {
    render() {
        return (
            <section>
                <p>Styles files are stored inside <i>app/styles</i>. A file named
                <i>global.scss</i> acts as a wrapper for all the styles. In this
                file you should include your Sass partials or any other stylesheets.</p>

                <p>In order to import styles from <i>node_modules</i>, use the tilde
                symbol and add the path inside <i>node_modules</i> folder. For example,
                in order to import Skeleton framework (which I'm using in this walkthrough)
                installed via npm, the statement I use in <i>global.scss</i> is:</p>

                <p><code>@import "~skeleton-css/css/skeleton.css"</code></p>

                <p>In order to load the styles into the project, <i>globals.scss</i>
                has to be imported into the App component.</p>
            </section>
        );
    }
}

export default Text;
