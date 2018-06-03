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
    styles/
node_modules/`}
                    </code>
                </pre>

            </section>
        );
    }
}

export default Text;
