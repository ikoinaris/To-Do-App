import React from 'react';
import Form from "./components/Form"

const apptTitle = "To-Do App"

const App = () => {
    return <div className="ui container center aligned">
        <h1>{apptTitle}</h1>
        <Form />
    </div>
};

export default App;