### dva 实际操作过程中遇到的问题
---
1. 在models和routes之间传输state和改变props的时候，需要注意index.js的initialState需要和route下面的文件里的组件运用connect方法的时候注意名称的一致性
2. 在数组生成的jsx对象里，注意key的独立性
3. 在组件元素中绑定事件的时候，需要通过this引用，不要漏掉this，漏掉的话会导致函数is not defined
4. 如果在绑定函数的时候，需要执行另一个函数，可以采用类似于: `onClick={()=>onClick(id)}`
5. 