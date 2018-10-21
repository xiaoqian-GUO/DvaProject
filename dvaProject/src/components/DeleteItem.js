import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'antd';

const DeleteItem =({id,name,onClick})=>{
    var style={
        marginLeft:30
    }
    return (
        <li key={id} id={id} > {name} <Button onClick={()=>onClick(id)} style={style}>删除</Button></li>
    );
}
DeleteItem.propTypes={
    name:PropTypes.string.isRequired,
    onClick:PropTypes.func.isRequired,
}
export default DeleteItem;