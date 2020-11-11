import React from 'react';


export default function Error(props) {
    return (
        <section className="ErrorPage">
            <h2>Something went wrong!</h2>
            <p>{props.error}</p>
            <button onClick={props.reload}>Go Back</button>
        </section>
    )
}