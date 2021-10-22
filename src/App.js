import React from 'react';
import Form from "./components/Form"
import Section from './components/Section';

const apptTitle = "To-Do App"

const App = () => {
    return <div className="ui container center aligned">
        <Section>
            <h1>{apptTitle}</h1>
        </Section>
        <Section>
            <Form />
        </Section>
    </div>
};

export default App;