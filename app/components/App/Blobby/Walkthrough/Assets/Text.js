import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Text extends React.Component {
    render() {
        return (
            <section>
                <p>Static resources have to be placed inside <i>app/assets</i> folder.
                A reference to that path has been added inside <i>app/server.js</i>.
                In this way, when app gets started (via npm), content will be loaded automatically.</p>

                <p>In order to load static content from css or code, the correct path to add is
                <i>/assets/path/to/content.extension</i></p>

                <p>So, for example, let's say you wanna load <i>blobby.png</i> which is inside
                <i>app/assets/images</i> the correct path to put inside <i>src</i> attribute
                is <i>/assets/images/blobby.png</i></p>

                <p>That actually doesn't require Einstein's IQ to be understood,
                but it's better to make it clear.</p>
            </section>
        );
    }
}

export default Text;
