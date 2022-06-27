import React from 'react'
const TABLE = ({data}) => {
  return (
   <table>
    <tbody>
        <tr>
            <th>Name</th>
            <th>Email</th>    
        </tr>
        {data.map((item) => (
        <tr key={item.id} >
            <td>{item.company_name}</td>
            <td>{item.email}</td>
        </tr>
        ))}
    </tbody>     
   </table>
  )
}

export default TABLE