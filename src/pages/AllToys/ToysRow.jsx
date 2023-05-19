import React from 'react';

const ToysRow = ({toy}) => {

    const {name, email}=toy
    console.log(toy);
    return (
        <tr>
        <th>
           
        </th>
        <td>
            
        </td>
        <td>
            {name}
        </td>
        <td>{email}</td>
       
        <th>
           
        </th>
    </tr>
    );
};

export default ToysRow;