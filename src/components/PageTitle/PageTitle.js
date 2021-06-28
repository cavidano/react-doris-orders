import React, { Component } from 'react';

class PageTitle extends Component {

    static defaultProps = {
        title: 'Order Vital Records'
    }

    render() {
        return (
        <div className="bg-primary py-4">

            <div className="container text-center">
                <h1 className="display-3 text-white">
                    {this.props.title}
                </h1>
            </div>

        </div>
        )
    }
}

export default PageTitle;
