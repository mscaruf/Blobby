import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Text extends React.Component {
    render() {
        return (
            <section>
                <p>Let's take a look at Blobby's folder structure</p>

                <pre>
                    <code>
{`app/
    actions/
        functions/
    assets/
        images/
        ...
    components/
        App/
        ...
    reducers/
        base/
        blobby/
        ...
    store/
    styles/`}
                    </code>
                </pre>

                <p><i>app</i> folder contains the core application. In <i>actions/functions</i> folder
                you'll find axios actions that get triggered by components. The actions are
                written using a wrapper in order to keep code clean (
                <Link to="/walkthrough/actions">See related section</Link>).</p>

                <p><i>assets</i> folder contains static assets like images or fonts.
                To see how to load content from assets folder, check-out <Link to="/walkthrough/assets">Assets</Link> section.</p>

                <p><i>components</i> folder contains (you guessed it) React components.
                These are the elements composing your application</p>

                <p><i>reducers</i> folder contains Redux stuff. In Blobby Redux is implemented with classes.
                To learn how it works, please check-out <Link to="/walkthrough/redux">Redux</Link> section.</p>

                <p><i>store</i> folder contains Redux store, the entity that contains the state of your application
                at every moment of the execution. It's all setup already (including Thunk and Redux Dev Tools extension).
                There should be no need for you to edit the configuration, until you need to add other middleware.
                To see how actions, reducers and components do get connected, checkout <Link to="/walkthrough/connect">Connect</Link> section.</p>

                <p><i>styles</i> folder contains Sass files from where you can add styling rules or include other styles.
                For details checkout <Link to="/walkthrough/styles">Styles</Link> section.</p>
            </section>
        );
    }
}

export default Text;
