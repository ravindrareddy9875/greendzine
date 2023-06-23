import './App.css';
import { useState } from 'react';
import { MainContext } from '../src/ContextStore/MainContext'
import EmployeeList from './components/EmployeeList/EmployeeList';
import SearchEmployee from './components/SearchEmployee/SearchEmployee';


function App() {
  const [employeeName,setEmployeeName]=useState('')
  return (
    <div>
      <MainContext.Provider value={{employeeName,setEmployeeName}}>
        <SearchEmployee />
        <EmployeeList />
      </MainContext.Provider>

    </div>
  );
}

export default App;
