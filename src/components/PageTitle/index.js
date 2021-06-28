import React from 'react';

const PageTitle = ({ title }) => {

    return (
        <div className="bg-primary py-4">

            <div className="container text-center">
                <h1 className="display-3 text-white">
                    {title}
                </h1>
            </div>

        </div>
    );
}

PageTitle.defaultProps = {
    title: 'Order Vital Records'
}

export default PageTitle;