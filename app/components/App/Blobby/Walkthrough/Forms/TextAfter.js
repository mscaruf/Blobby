import React from 'react';
import { Link } from 'react-router-dom';

class TextAfter extends React.Component {
    render() {
        return (
            <section>
                <p>If you take a look inside BlobbyForm component, you can see
                that <i>formApi</i> variable is mapped to hold all form related data.
                It's just an object that store form elements key-value pairs</p>

            </section>
        );
    }
}

export default TextAfter;
