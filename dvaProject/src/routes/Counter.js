import React from 'react';
import {connect} from 'dva';
import {Button} from 'antd';
import TestError from '../components/TestError';

class Counter extends React.Component{
    handlerReduce=()=>{
/*
拿到dispatch
const { dispatch } = this.props.dispatch({type: 'count/add'}) 
// this.props.dispatch({type: 'count/add'})
可以直接调用 effects， 也可以直接调用reducers。如果是同名的话，会一起调用。优先执行reducers。
【dispatch 方法从哪里来？被 connect 的 Component 会自动在 props 中拥有 dispatch 方法。】*/

 
        this.props.dispatch({
            type:'count/reduce'
        });
    }
    handlerAdd=()=>{
        this.props.dispatch({
            type:'count/add'
        });
    }
    render(){
        return (
            <div>
                <TestError/>
                <p>{this.props.count}</p>
                <Button onClick={this.handlerAdd}>+</Button>
                <Button onClick={this.handlerReduce}>-</Button>
            </div>
        );
    }
}
export default connect(({count})=>({count,}))(Counter);