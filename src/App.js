import React, { useState, useEffect } from 'react';
import './style.css';
import Header from './Header';

export default function App() {
  const [userDetails, setUserDetails] = useState({});
  const [tableData, setTableData] = useState([
    {
      id: '1',
      key: '1',
      firstName: 'John',
      lastName: 'Brown',
      name: 'John Brown',
      age: 32
    },
    {
      id: '2',
      key: '2',
      firstName: 'Jim',
      lastName: 'Green',
      name: 'Jim Green',
      age: 42
    },
    {
      id: '3',
      key: '3',
      firstName: 'Joe',
      lastName: 'Black',
      name: 'Joe Black',
      age: 32
    }
  ]);
  useEffect(() => {
    const test = localStorage.getItem('userDetailsAssignment');
    if (test) {
      setUserDetails(JSON.parse(test));
    }
  }, []);

  console.log(tableData, 'tableData');

  return (
    <div>
      <Header
        userDetails={userDetails}
        setUserDetails={setUserDetails}
        tableData={tableData}
        setTableData={setTableData}
      />
    </div>
  );
}
