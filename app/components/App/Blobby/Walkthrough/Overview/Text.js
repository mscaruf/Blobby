import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Text extends React.Component {
    render() {
        return (
            <section>
                <h3>Why?</h3>
                <p>I noticed that, whenever I start a new React project,
                    I find my self to waste a lot of time in setting up the
                    whole environment just to end up with the same situation
                    I was on the previous project. Therefore I decided to set-up this
                    boilerplate called Blobby and make it available on GitHub.
                    It can be used as a starting point for a new React project.</p>

                <p>Blobby starts as a fork from&nbsp;
                    <a href="https://github.com/jpsierens/webpack-react-redux">this</a>
                    &nbsp;boilerplate from Jean-Pierre Sierens, but goes one step further as
                    it adds all the components you need to effectively start working on
                    a new project.</p>

                  <p>Redux (<Link to="/redux">see related section</Link>) is implementent with classes instead of
                    traditional switch/case constructs. This is made in order to keep
                    reducers clean and easy when code adds up. All the Axios/Thunk/Connect
                    components have been put together. I also created a wrapper
                    for Axios in order to make actions (<Link to="/actions">see related section</Link>)
                    more clean and avoid code duplicates.</p>

                  <p>Check-out "Getting Started" section in order to start using
                   the boilerplate! If you like Blobby don't forget to put a star on the repo :)</p>
            </section>
        );
    }
}

export default Text;
