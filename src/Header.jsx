import React, { Component } from "react";
import { withRouter } from "react-router-dom";






class Header extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const path = this.props.location.pathname.slice(1);
        if (path === '404') {
            return (
                <div>
                    <h2>404 - Page not found</h2>
                    <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
                </div>
            );
        }

        if (path === '403') {
            return (
                <div>
                    <h2>403 - Access Denied</h2>
                    <p>Sorry the page you are trying to access is not available.</p>
                </div>
            );
        }
        switch (path) {
            case '500':
                return (
                    <div>
                        <h2>{path} - Server Error</h2>
                        <p>Sorry there has been a server error. Please try again later.</p>
                    </div>
                );
            case '502':
                return (
                    <div>
                        <h2>{path} - Server Error</h2>
                        <p>Sorry there has been a server error. Please try again later.</p>
                    </div>
                );
            case '503':
                return (
                    <div>
                        <h2>{path} - Server Error</h2>
                        <p>Sorry there has been a server error. Please try again later.</p>
                    </div>
                );

            case '504':
                return (
                    <div>
                        <h2>{path} - Server Error</h2>
                        <p>Sorry there has been a server error. Please try again later.</p>
                    </div>
                );

        }


    }
}

export default withRouter(Header);