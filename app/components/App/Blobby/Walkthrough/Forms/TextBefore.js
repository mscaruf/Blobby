import React from 'react';
import { Link } from 'react-router-dom';

class TextBefore extends React.Component {
    render() {
        return (
            <section>
                <p>In this section we cover form handling. Blobby uses
                <a href="//react-form.js.org">reactform</a> component to render
                forms and collect data. Below you can see an example.</p>

                <p>Form data gets stored in BlobbyForm component's state. When you
                click on Add button, all data gets sent to <Link to="/walkthrough/redux">Redux</Link>
                via <Link to="/walkthrough/actions">Axios</Link>. The List
                of Blobbies get's retrieves thanks to <Link to="/walkthrough/connect">Connect</Link> component. This covers
                the full cycle of data connection. Try to add more Blobbies
                and play around with the form!</p>
            </section>
        );
    }
}

export default TextBefore;
