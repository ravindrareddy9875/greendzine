import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import '../EmployeeList/EmployeeList.css';
import { MainContext } from '../../ContextStore/MainContext';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const { employeeName } = useContext(MainContext);

  useEffect(() => {
    axios.get('https://reqres.in/api/users?page=2').then((res) => {
      setEmployees(res.data.data);
    });
  }, []);

  const filteredEmployees = employees.filter((employee) =>
    employee.first_name.toLowerCase().includes(employeeName.toLowerCase())
  );

  return (
    <div className="Employee-component">
      {filteredEmployees.length > 0 ? (
        <ul className="employee-list">
          {filteredEmployees.map((employee, id) => (
            <div className="employee" key={employee.id}>
              <span className="id">{id + 1}</span>
              <li className="employee-item">
                <img src={employee.avatar} alt="Avatar" className="employee-avatar" />
              </li>
              <span className="employee-name">{employee.first_name}</span>
            </div>
          ))}
        </ul>
      ) : (
        <p style={{textAlign:"center",color:'white'}}>No employees found.</p>
      )}
    </div>
  );
};

export default EmployeeList;
