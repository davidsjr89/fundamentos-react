import React from 'react';
import Filho  from './Filho';

export default props => 
<div>
    <Filho {...props}>João</Filho>
    <Filho sobrenome={props.sobrenome}>Maria</Filho>
    <Filho sobrenome="Silva">Pedro</Filho>
</div>

//Essa comunicação é do pai para o filho. Ela é chamada de comunicação direta.