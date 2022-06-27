import { useState } from 'react';
import './App.css';
import {companies} from './companies';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
function App() {
  const [find, setFind] = useState("");
  // console.log(companies.filter((company)=>company.company_name.toLowerCase().includes("a")));
  return (
    <div className="App">
      <input type="text" 
      placeholder='Find...' 
      className="iField" 
      onChange = {(e)=>setFind(e.target.value)}/>
      <ul className='uList' >
        {/* {companies.map((company) => (
          <li className='list'>{company.company_name}</li>
        ))} */}
        {companies.filter(company => company.company_name.toLowerCase().includes(find)).map(company =>(
          <li key = {company.id} className="list">{company.company_name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
