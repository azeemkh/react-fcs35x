import React from 'react';
import { Table } from 'antd';

const columns = [
  {
    title: 'ID',
    dataIndex: 'key',
    render: text => <a>{text}</a>
  },
  {
    title: 'First Name',
    dataIndex: 'firstName'
  },
  {
    title: 'Last Name',
    dataIndex: 'lastName'
  },
  {
    title: 'Age',
    dataIndex: 'age'
  },
  {
    title: 'Full Name',
    dataIndex: 'name'
  }
];

const data = [
  {
    key: '1',
    firstName: 'John',
    lastName: 'Brown',
    name: 'John Brown',
    age: 32
  },
  {
    key: '2',
    firstName: 'Jim',
    lastName: 'Green',
    name: 'Jim Green',
    age: 42
  },
  {
    key: '3',
    firstName: 'Joe',
    lastName: 'Black',
    name: 'Joe Black',
    age: 32
  }
];

// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      'selectedRows: ',
      selectedRows
    );
  },
  getCheckboxProps: record => ({
    name: record.name
  })
};

const Dashboard = props => {
  return (
    <div style={{ margin: 50 }}>
      <Table
        rowSelection={{
          ...rowSelection
        }}
        columns={columns}
        dataSource={props.tableData}
      />
    </div>
  );
};

export default Dashboard;
