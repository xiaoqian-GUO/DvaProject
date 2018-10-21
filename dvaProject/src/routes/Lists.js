import React from 'react';
import {connect} from 'dva';
import TableList from '../components/TableList.js';

const Lists =({dispatch,lists})=>{
    function handlerDelete(id){
        dispatch({
            type:"lists/delete",
            payload:id,
        });
    }
    var style={
        textAlign:"center",
        outlineWidth:1,
        outlineStyle:"dashed",
        outlineOffset:5,
    };
    return (
        <div>
            <h2 style={style}>xiaoqian's table</h2>
            <TableList onDelete={handlerDelete} lists={lists}></TableList>
        </div>
    );
}

export default connect(({lists})=>({lists,}))(Lists);