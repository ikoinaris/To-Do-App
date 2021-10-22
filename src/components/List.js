import React from 'react';
import ToDo from './ToDo';

const List = ( {list} ) => {
    const renderedList = list.map((item) => <ToDo title={item.title} completed={item.completed} key={item.title} />);
    return (
        <div className="ui grid center aligned">
            {renderedList}
        </div>
    )
};

export default List;