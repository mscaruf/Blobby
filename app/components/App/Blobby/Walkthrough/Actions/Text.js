import React from 'react';
import { Link } from 'react-router-dom';

class Text extends React.Component {
    render() {
        return (
            <section>
                <p>Blobby implements <a href="//github.com/axios/axios">Axios</a> to perform
                HTTP operations. In addition to that, there is an extendable wrapper
                to reduce line numbers and keep code clean.</p>

                <p>Actions are stored into <i>app/actions/functions/</i> folder.
                The functions inside those files call Axios through the wrapper.</p>

                <p>Axios performs the HTTP operation and then sends the results to Redux.</p>

                <p>In addition to HTTP methods, you can emit events (to Redux) without calling
                an API or an external resource. Here's an example:</p>

              <pre>
                <code>
{`export function addBlobbyToList(blobby) \{
    return wrapper.emit("addBlobbyToList", new Array(blobby));
\}`}
                </code>
              </pre>

                <p>The wrapper calls Axios which calls Redux passing <i>blobby</i>
                as function argument. All the arguments you wanna pass to Redux
                should be stored in that array.</p>

                <p>Checkout <Link to="/walkthrough/redux">Redux</Link> section to see how this maps to Reducers.</p>
            </section>
        );
    }
}

export default Text;
