import React from 'react';

export default (props) => {
    return (
        <div>
          <button type="button" onClick={props.onInc}>
            +
          </button>
          <button type="button" onClick={props.onDec}>
            -
          </button>
        </div>
    )
}