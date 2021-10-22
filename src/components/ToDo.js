import React, { useState } from 'react';

const ToDo = ({ title }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [value, setValue] = useState(title);
    const [tempValue, setTempValue] = useState(title);

    const handleDivDoubleClick = () => {
        setIsEditing(true);
    };

    const handleInputKeyDown = (e) => {
        const key = e.keyCode;
        if(key === 13) {
            setValue(tempValue);
            setIsEditing(false);
        } else if (key === 27) {
            setTempValue(value);
            setIsEditing(false);
        }
    };

    const handleInputOnChange = (e) => {
        setTempValue(e.target.value);
    }

    return (
        <div className="row" onDoubleClick={handleDivDoubleClick}>
            {
              isEditing ?
                 <div className="column seven wide">
                     <div className="ui input fluid">
                         <input
                             onChange={handleInputOnChange}
                             autoFocus={true}
                             value={tempValue}
                             onKeyDown={handleInputKeyDown}/>
                     </div>
                 </div>
                      :
                      <>
                  <div className="column five wide">
                      <h2>{value}</h2>
                  </div>
                  <div className="column one wide">
                      <button className="ui button circular icon green">
                          <i className="white check icon"></i>
                      </button>
                  </div>
                  <div className="column one wide">
                      <button className="ui button circular icon red">
                          <i className="white remove icon"></i>
                      </button>
                  </div>
              </>
            }
        </div>
    )
};

export default ToDo;