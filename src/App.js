import React, { useState, useEffect } from 'react';
import todos from './api';

import Form from "./components/Form"
import List from './components/List';
import Section from './components/Section';

const appTitle = "My To-Dos";
const dbUrl = "http://localhost:3030/todos/";


const App = () => {
    const [toDoList, setToDoList] = useState([]);

    useEffect(() => {
        (async function () {
            const { data } = await todos.get("/todos");
            setToDoList(data);
        })();
    }, []);

    const addToDo = async (item) => {
        const { data } = await todos.post("/todos", item);
        setToDoList((oldList) => [...oldList, data]);
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