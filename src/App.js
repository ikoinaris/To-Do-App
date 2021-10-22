import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Form from "./components/Form"
import List from './components/List';
import Section from './components/Section';

const appTitle = "My To-Dos";
const dbUrl = "http://localhost:3030/todos/";

const list = [
    { id: 1, title: "Test #1", completed: false},
    { id: 2, title: "Test #2", completed: false},
    { id: 3, title: "Test #3", completed: false}
];

const App = () => {
    const [toDoList, setToDoList] = useState(list);

    useEffect(() => {
        (async function () {
            const response = await axios.get(dbUrl);
            console.log(response);
        })();
    }, []);

    const addToDo = (item) => {
        console.log(toDoList);
        setToDoList((oldList) => [...oldList, item]);
    };
    const removeToDo = (id) => {
        setToDoList((oldList) => oldList.filter((item) => item.id !== id));
    };

    return <div className="ui container center aligned">
        <Section>
            <h1>{appTitle}</h1>
        </Section>
        <Section>
            <Form addToDo={addToDo}/>
        </Section>
        <Section>
            <List removeToDoListProp={removeToDo} list={toDoList} />
        </Section>
    </div>
};

export default App;