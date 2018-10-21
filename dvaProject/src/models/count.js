export default {
    namespace:'count',
    state:0,
    reducers:{
        add(count){return count+1},
        reduce(count){return count-1},
    }
}