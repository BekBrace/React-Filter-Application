import { useState } from 'react';
import './App.css';
import {data} from './data';
import TABLE from './componenets/TABLE';
function App() {
  const [find, setFind] = useState("");
  const search = (data) => {
    return data.filter(item => 
      item.author.toLowerCase().includes(find) || 
      item.language.toLowerCase().includes(find) ||
      item.title.toLowerCase().includes(find)||
      item.country.toLowerCase().includes(find))
  };
  // console.log(companies.filter((company)=>company.company_name.toLowerCase().includes("a")));
  return (
    <div className="App">
      <input type="text" 
      placeholder='Find a book ...' 
      className="iField" 
      onChange = {(e)=>setFind(e.target.value)}/>
      <TABLE data={search(data)} />
    </div>
  );
}

export default App;
