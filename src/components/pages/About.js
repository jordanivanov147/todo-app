import React from 'react';

function About() {
    return (
        <React.Fragment>
            <h1 style={{textAlign: 'center'}}>About</h1>
            <p>
                This is the TodoList app v1.0.0 created with React. It implements React router,
                Axios and uses https://jsonplaceholder.typicode.com/ as a backend.
            </p>
        </React.Fragment>
    )
}

export default About;