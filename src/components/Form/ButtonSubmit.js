import React, { Component } from 'react';

class ButtonSubmit extends Component {

    onClick = (e) => {
        e.preventDefault();
        alert('Whoa!!!!!');
    }

    render() {
        return (
            <div className="narrow my-5">
                <button
                    className="btn btn-lg btn-block btn-primary rounded"
                    type="submit"
                    onClick={this.onClick}
                >
                    Add to Cart
                </button>
            </div>
        )
    }
}

export default ButtonSubmit;
