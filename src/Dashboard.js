import React from 'react';
import { Table } from 'antd';
import { useSelector } from 'react-redux';

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

const Dashboard = () => {
  const items = useSelector(state => {
    return state;
  });
  return (
    <div style={{ margin: 50 }}>
      <Table
        rowSelection={{
          ...rowSelection
        }}
        columns={columns}
        dataSource={items.itemsData.itemsData}
      />
    </div>
  );
};

export default Dashboard;
