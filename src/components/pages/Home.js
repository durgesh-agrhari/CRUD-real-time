import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link, NavLink} from 'react-router-dom';
import './Home.css'

const Home = () => {
    const [ users, setUser ] = useState([]);

  useEffect(() => {
      console.log("Hi kias hai bro");
  },[])
// []dependency hai te array ka null mtlb 0 haim agar ye nahi rahega to infinite time chal jayeha  
useEffect(() =>{
    loadUsers();
});

const loadUsers = async () => {
    const result = await axios.get("http://localhost:3003/users");
    setUser(result.data.reverse());
}

const deleteUser = async id => {
  await axios.delete(`http://localhost:3003/users/${id}`);
  loadUsers();
};
  return (
    <div className='container'>
        <div>
          <center>
            <div className='btn m-3'>
            <h2 className='hh'>Home pages Nyx Wolves</h2>
            </div>
          </center>
  <table class="table border shadow">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">User Name</th>
      <th scope="col">Email</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody class="table-group-divider">
    {
        users.map((user, index) => (
            <tr>
                <th scope='row'>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <NavLink className="btn btn-primary m-1" aria-current="page" 
                  to={`/user/${user.id}`}>View</NavLink>
                  <NavLink className="btn btn-outline-primary m-1" aria-current="page" to={`/edituser/${user.id}`} >Edit</NavLink>

                  {/* //empity function ko aninomious function bolate hai */}
                  <NavLink className="btn btn-danger m-1" aria-current="page" to="/" onClick={() => deleteUser(user.id)}>Delete</NavLink>
                </td>
            </tr>
        ))
    }
  </tbody>
</table>

        </div>
    </div>
  )
}

export default Home