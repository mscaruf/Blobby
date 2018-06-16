import React from 'react';
import { Link } from 'react-router-dom';

class Text extends React.Component {
    render() {
        return (
            <section>
                <p>In Blobby, Redux is implemented in a OOP oriended way, by using
                package <a href="//github.com/redeeps/red-redux-class">red-redux-class</a>.
                This is done because, with classic Redux implementation, when the project
                gets bigger you get these giant switch/case constructs which gets hard to
                mantain. With a class-based implementation, you are free to reuse and extend
                existing code.</p>

                <p>In order to understand how it works, be sure to read the
                package <a href="//github.com/redeeps/red-redux-class">documentation</a>.
                It's really easy to understand.</p>

                <p>In addition to that, Blobby has enabled support
                for <a href="//github.com/zalmoxisus/redux-devtools-extension">redux-dev-tools</a>.
                If you already installed the extension in your browser, open up your developer tools
                and you should see the related panel. From there you can monitor the whole app state.</p>

                <p>Now let's see how events are mapped in Blobby. Let's say you have this action:</p>

                <pre>
                  <code>
{`export function addBlobbyToList(blobby) \{
    return wrapper.emit("addBlobbyToList", new Array(blobby));
\}`}
                  </code>
                </pre>

                <p>In order to intercept this event in a reducer, you should add
                   (inside reducer's related class) a function like this:</p>

                                <pre>
                                  <code>
{`addBlobbyToList(blobby) \{
    let blobbyList = this.get('blobbyList');
    blobbyList.push(blobby);
    this.set('blobbyList', blobbyList)
\}`}
                                  </code>
                                </pre>

                <p>In the action you trigger the event (emit/get/post/put/whatever) with the
                function name and the arguments. In the reducer you catch the function
                and the arguments and you manipulate is as you want.</p>

              <p>Checkout <Link to="/walkthrough/connect">Connect</Link> section to see how the whole cycle wraps-up together.</p>
            </section>
        );
    }
}

export default Text;
