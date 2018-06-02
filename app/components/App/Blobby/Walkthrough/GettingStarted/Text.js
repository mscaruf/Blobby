import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Text extends React.Component {
    render() {
        return (
            <section>
                <p>In order to get confidence with the boilerplate, you should
                read all the sections of the menu and play around with the example
                components.</p>

                <p>Whenever you feel like you're ready to start working on your project,
                fire up a terminal window and execute following commands:</p>

                <code>git checkout -b clean</code>
                <code>npm install</code>
                <code>npm start</code>

                <p>The <i>clean</i> branch has this walkthrough components removed</p>
            </section>
        );
    }
}

export default Text;
