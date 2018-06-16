import React from 'react';
import { Link } from 'react-router-dom';

class Text extends React.Component {
    render() {
        return (
            <section>
                <p>Connect is the piece that links Redux to React components.
                In order to read stuff from reducers, you add Connect to your
                component and you reference the reducers.</p>

                <p>Suppose you want to access data inside <i>blobbyReducer</i>. In <i>app/reducers/index.js</i>
                  you find something like: </p>

                <pre>
                  <code>
{`const rootReducer = combineReduxClassReducers(\{
    blobbyReducer: blobby,
\})`}
                  </code>
                </pre>

                <p>In order to access that data in component <i>BlobbyComp</i>, you should import Connect with:</p>
                <p><code>{`import { connect } from 'react-redux';`}</code></p>

                <p>Then, at the bottom of the component, you should add:</p>
                  <pre>
                    <code>
{`function mapStateToProps(state) \{
    return \{
        blobby: state.blobbyReducer
    \};
\}

export default connect(mapStateToProps)(BlobbyComp);
`}
                    </code>
                  </pre>

                <p>Now you can access all data inside <i>blobbyReducer</i> just
                by referring to <i>this.props.blobby</i> in the component.</p>
            </section>
        );
    }
}

export default Text;
