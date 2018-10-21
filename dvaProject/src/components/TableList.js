import React from "react";
import PropTypes from "prop-types";
import {Table, Popconfirm, Button } from "antd";

const TableList = ({onDelete,lists})=> {
    const columns=[{
        title:"Name",
        dataIndex: "name",
    },{
        title:"Age",
        dataIndex:"age",
    },{
        title:"Actions",
        render:(text,record)=>{
            return (
                <Popconfirm title="Delete?" onConfirm={()=>onDelete(record.id)}>
                    <Button>Cancel</Button>
                </Popconfirm>
            );
        }
    }];
    return (
        <Table
            dataSource={lists}
            columns={columns}
        />
    );
}
TableList.propTypes={
    onDelete:PropTypes.func.isRequired,
    lists:PropTypes.array.isRequired,
}

export default TableList;