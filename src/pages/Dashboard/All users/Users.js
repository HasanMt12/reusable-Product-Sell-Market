import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';


const Users = () => {
      const {data: users = [] , refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async() =>{
            const res = await fetch('http://localhost:5000/users');
            const data = await res.json();
            console.log(data);
            return data;
            
        }
    });

            // seller verified
    const handleMakeVerified = id => {
        fetch(`http://localhost:5000/users/admin/${id}`, {
            method: 'PUT'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0 ){
                toast.success('make seller verified successfully')
                refetch();
            }
        })
    }

    return (
        <div>
            <h1>start</h1>
            <div className="overflow-x-auto">
  <table className="table w-full">
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>role</th>
        <th>make verify</th>
        <th>Delete user</th>
      </tr>
    </thead>
    <tbody>
      {
        users.map((user, i) =><tr key={user._id}>
          
            <th>{i+1}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.role}</td>
           <td>{ user?.verification !== 'verify' ? <button onClick={()=> handleMakeVerified(user._id)} className="btn btn-xs  text-gray-900 ">make verified</button>
           :<p className='text-green-500 '> verified seller</p>} </td>

            <td><button className='btn btn-xs btn-danger'>Delete</button></td>
          </tr>)
      }  
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Users;