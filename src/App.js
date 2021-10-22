import React, { useState } from 'react';
import Form from "./components/Form"
import List from './components/List';
import Section from './components/Section';

const apptTitle = "To-Do App";

const list = [
    { title: "Test #1", completed: false},
    { title: "Test #2", completed: false},
    { title: "Test #3", completed: false}
];

const App = () => {
    const [toDoList, setToDoList] = useState(list);
    const addToDo = (item) => {
        setToDoList((oldList) => [...oldList, item]);
    }
    return <div className="ui container center aligned">
        <Section>
            <h1>{apptTitle}</h1>
        </Section>
        <Section>
            <Form addToDo={addToDo}/>
        </Section>
        <Section>
            <List list={toDoList} />
        </Section>
    </div>
};

export default App;