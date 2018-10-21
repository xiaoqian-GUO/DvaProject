### dva+antd 使用总结
---
>PATH
1. 在javascript中，经常用./表示当前目录，用../表示父级目录，用/表示根目录，所以在react中要特别注意路径的正确性
>REDUCER + DISPATCH
1. 拿到dispatch
```
const { dispatch } = this.props.dispatch({type: 'count/add'}) 
// this.props.dispatch({type: 'count/add'})
```
2. 可以直接调用 effects， 也可以直接调用reducers。如果是同名的话，会一起调用,优先执行reducers;
3. dispatch 方法从哪里来？被 connect 的 Component 会自动在 props 中拥有 dispatch 方法;
4. 在路由文件中调用action的时候通过下面的方法：
```
dispatch({
    type:'path',  //如果在model外调用，需要添加namespace
    payload:{}    //需要传递的信息
})
```
5. action 必须带有 type 属性指明具体的行为，其它字段可以自定义，如果要发起一个 action 需要使用 dispatch 函数；需要注意的是 dispatch 是在组件 connect Models以后，通过 props 传入的;
6. 需要注意的是 Reducer 必须是纯函数，所以同样的输入必然得到同样的输出，它们不应该产生任何副作用。并且，每一次的计算都应该使用immutable data，这种特性简单理解就是每次操作都是返回一个全新的数据（独立，纯净），所以热重载和时间旅行这些功能才能够使用;
>EFFECT
1. 如果action是异步行为（副作用）会先触发 Effects 然后流向 Reducers 最终改变 State
2. effect与reducer不同的是，reducer必须是纯函数，而effect是不纯的函数，对应函数中的异步操作，同样的输入不一定能得到同样的输出
>subscription
1. subscription用于订阅数据源，根据条件再dispatch需要的action
2. 数据源可以是当前的时间，服务器的websocket连接，keyboard输入，geolocation变化，history路由变化等等
```
import key from 'keymaster';
const app=dva();
app.model({
    namespace:'count',
    subscriptions:{
        keyEvent({dispatch}){
            key('up','ctrl+up',()={
                dispatch({type:'add'});
            });
        },
    }
});
```
>router--SPA--前端路由
1. 前端路由
```
import {Router,Route} from 'dva/router';
import dva,{connect} from 'dva';

app.router(({history})=>(
    <Router history={history}>
        <Route path="/" component={HomePage} />
    </Router>
));
```
