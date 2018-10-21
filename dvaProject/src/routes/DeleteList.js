import React from 'react';
import {connect} from 'dva';
import DeleteItem from '../components/DeleteItem';

class DeleteList extends React.Component{
    handlerClick=(id)=>{
        this.props.dispatch({
            type:"deletes/delete",
            payload:id,
        });
    }
    render(){
        var arr=this.props.deletes.map((item,index)=>{
            return <DeleteItem key={item.key} id={item.id} name={item.name} onClick={this.handlerClick} />
        });
        return (
            <div>
                <ul>
                    {arr}
                </ul>
            </div>
        );
    }
}
//export default DeleteList;
export default connect(({deletes})=>({deletes,}))(DeleteList);