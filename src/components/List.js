import React from 'react'
import axios from 'axios'
import TableHead from './TableHead'

class List extends React.Component{
    state={
        apiData:[]
    }
    componentDidMount=()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((result)=>{
            this.setState({
                apiData:result.data,
            })
        })
        .catch((error)=>{
            console.error(error)
        })
    }
    render(){
        const DisplayNames=this.state.apiData.map((person,index)=>{
        return(<li key={index}>{person.name}<br/>{person.email}</li>)
        })
        const TableData=this.state.apiData.map((person,index)=>{
        return(<tr key={index}>
            <td>{person.id}</td>
            <td>{person.name}</td>
            <td>{person.username}</td>
            <td>{person.email}</td>
            <td>{person.address.street}</td>
            <td>{person.phone}</td>
            <td>{person.website}</td>
            <td>{person.company.name}</td>
        </tr>)
        })
        return(
            <>
        <ul>{DisplayNames}</ul>
        <table>
            <thead>
                <th>ID</th>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Adress</th>
                <th>Phone Number</th>
                <th>Website</th>
                <th>Company</th>
            </thead>
            <tbody>
                {TableData}
            </tbody>
        </table>
            </>
        )
    }
}

export default List