import React, { Component } from 'react';

export class PageTitle extends Component {

    static defaultProps = {
        title: 'Order Vital Records'
    }

    render() {
        return (
        <div class="bg-primary py-4">

            <div class="container text-center">
                <h1 class="display-3 text-white">
                    {this.props.title}
                </h1>
            </div>

        </div>
        )
    }
}

export default PageTitle;
