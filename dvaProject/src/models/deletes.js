export default {
    namespace:'deletes',
    state:[],
    reducers:{
        'delete'(state,{payload:id}){
            return state.filter((item)=>(item.id)!=id);
        },
    }
}