import React from 'react';

export default class RootComponent extends React.Component {
    render() {
        const { Component, pageProps } = this.props;

        return (
            <div risel-type="root-component">
                <Component {...pageProps} />
            </div>
        );
    }
}
