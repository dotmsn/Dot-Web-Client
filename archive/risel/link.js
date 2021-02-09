import React, { useState } from 'react';

var state, setState;

function navigate(event) {
    event.preventDefault();

    const href = event.target.href;
    window.history.pushState(null, '', href);

    setState(href);
}

function Link(props) {
    [state, setState] = useState(null);

    return (
        <a onClick={navigate} {...props}>
            {props.children}
        </a>
    );
}

export default Link;
