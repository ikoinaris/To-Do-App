import React from 'react';
import ToDo from './ToDo';

const List = ( {list, removeToDoListProp} ) => {
    const renderedList = list.map((item) =>
        <ToDo
            title={item.title}
            completed={item.completed}
            removeToDoItemProp={(e) => removeToDoListProp(item._id)} key={item.title}
        />);
    return (
        <div className="ui grid center aligned">
            {renderedList}
        </div>
    )
};

export default List;