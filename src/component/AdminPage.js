import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './AdminPage.css'

const URL = 'https://jsonplaceholder.typicode.com/users'

const Table = () => {
    const [employees, setEmployees] = useState([])

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {

        const response = await axios.get(URL)
        setEmployees(response.data)
    }

    const removeData = (id) => {

        axios.delete(`${URL}/${id}`).then(res => {
            const del = employees.filter(employee => id !== employee.id)
            setEmployees(del)
        })
    }

    const renderHeader = () => {
        let headerElement = ['id', 'name', 'email', 'phone', 'operation']

        return headerElement.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    const renderBody = () => {
        return employees && employees.map(({ id, name, email, phone }) => {
            return (
                <tr key={id}  >
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td>{phone}</td>
                    <td className='opration'>
                        <button className='modify' >Modify</button>
                        <button className='button' onClick={() => removeData(id)}>Delete</button>
                        
                    </td>
                </tr>
            )
        })
    }

    return (
        <>
            <h1 id='title'>List User</h1>
            <table id='employee'>
                <thead>
                    <tr>{renderHeader()}</tr>
                </thead>
                <tbody >
                    {renderBody()}
                </tbody>
            </table>
            <p>fin</p>
           
        </>
    )
}


export default Table