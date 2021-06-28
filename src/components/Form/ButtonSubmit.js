import React from 'react';

const submitOrder = (e) => {
    e.preventDefault();
    alert('Whoa!!!!!');
}

const ButtonSubmit = (props) => {
    return (
        <div className="narrow my-5">
            <button
                className="btn btn-lg btn-block btn-primary rounded"
                type="submit"
                onClick={submitOrder}
            >
                Add to Cart
            </button>
        </div>
    );
}

export default ButtonSubmit;