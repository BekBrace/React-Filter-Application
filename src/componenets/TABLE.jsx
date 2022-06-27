import React from 'react'
const TABLE = ({data}) => {
  return (
   <table>
    <tbody>
        <tr>
            <th>Author</th>
            <th>Country</th>    
            <th>Language</th>    
            <th>Title</th>      
            <th>Year</th>      
        </tr>
        {data.map((item) => (
        <tr key={item.id} >
            <td>{item.author}</td>
            <td>{item.country}</td>
            <td>{item.language}</td>
            <td>{item.title}</td>
            <td>{item.year}</td>
        </tr>
        ))}
    </tbody>     
   </table>
  )
}

export default TABLE
