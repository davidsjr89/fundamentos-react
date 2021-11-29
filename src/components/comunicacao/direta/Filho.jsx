import React from 'react';

export default props => 
<div>
    <h3>Componente Filho</h3>
    <p>{props.children} {props.sobrenome}</p>
</div>