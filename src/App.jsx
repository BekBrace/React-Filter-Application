import { useState } from 'react';
import './App.css';
import {companies} from './companies';
import TABLE from './componenets/TABLE';
function App() {
  const [find, setFind] = useState("");
  const search = (data) => {
    return data.filter(item=>item.company_name.toLowerCase().includes(find))
  }
  // console.log(companies.filter((company)=>company.company_name.toLowerCase().includes("a")));
  return (
    <div className="App">
      <input type="text" 
      placeholder='Find...' 
      className="iField" 
      onChange = {(e)=>setFind(e.target.value)}/>
      <TABLE data={search(companies)} />
    </div>
  );
}

export default App;
