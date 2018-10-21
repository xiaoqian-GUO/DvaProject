import dva from 'dva';
import './index.css';

// 1. Initialize
const app = dva({
    initialState:{
        count:10,
        products:[
            {name:'dva',id:1,key:1},
            {name:"antd",id:2,key:2},
        ],
        
        lists:[
            {name:'xiaoqian',age:'18',id:1,key:1},
            {name:'dp',age:19,id:2,key:2}
        ],
        deletes:[
            {name:'xiaoqian',id:1,key:1},
            {name:"daipeng",id:2,key:2},
        ],
    },
});
console.log(app._store);  //顶部的state数据

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default);
app.model(require('./models/products').default);
app.model(require('./models/lists').default);
app.model(require('./models/count').default);
app.model(require('./models/deletes').default);
// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
