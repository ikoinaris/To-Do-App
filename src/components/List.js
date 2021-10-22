import React from 'react';
import ToDo from './ToDo';

const List = ( {list, removeToDoListProp, editToDoListProp} ) => {
    const renderedList = list.map((item) =>
        (
            <ToDo
                title={item.title}
                completed={item.completed}
                editToDoItemProp={(updatedItem) => editToDoListProp(item._id, updatedItem)}
                removeToDoItemProp={(e) => removeToDoListProp(item._id)}
                key={item.title}
            />
        )
        );
    return (
        <div className="ui grid center aligned">
            {renderedList}
        </div>
    )
};

export default List;