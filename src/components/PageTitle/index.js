import React from 'react';

const PageTitle = (props) => {

    return (
        <div className="bg-primary py-4">

            <div className="container text-center">
                <h1 className="display-3 text-white">
                    {props.title}
                </h1>
            </div>

        </div>
    );
}

PageTitle.defaultProps = {
    title: 'Page Title'
}

export default PageTitle;