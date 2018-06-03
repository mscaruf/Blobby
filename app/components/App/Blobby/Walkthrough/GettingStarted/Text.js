import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Text extends React.Component {
    render() {
        return (
            <section>
                <p>In order to get confidence with the boilerplate, you should
                read all the sections of this walkthrough and play around with the example
                components.</p>

                <p>Whenever you feel like you're ready to start working on your project,
                fire up a terminal window (in the main project folder) and execute following commands:</p>

              <pre>
                <code>
{`git checkout clean
npm install
npm start`}
                </code>
              </pre>

                <p>The <i>clean</i> branch has this walkthrough components and references removed from the project.</p>
            </section>
        );
    }
}

export default Text;
