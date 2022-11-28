import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmDeleteModal from '../../shared/modal/ConfirmDeleteModal';


const Users = () => {
     const [deletingUser, setDeletingUser] = useState(null);

     const closeModal = () => {
        setDeletingUser(null);
    }
    
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


    const handleDeleteUser = user =>{
      fetch(`http://localhost:5000/users/${user._id}`, {
        method: 'DELETE', 
         headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
      })
      .then(res => res.json())
      .then(data => {
        if(data.deletedCount > 0){
          refetch()
          toast.success('deleted successfully')
        }
        
      })
    }
    return (
        <div className='w-11/12 mx-auto '>
            
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

            <td>
                  <label onClick={() => setDeletingUser(user)} htmlFor="confirmation-modal" className="btn btn-sm btn-error">Delete</label>
            </td>
          </tr>)
      }  
      
    </tbody>
  </table>
</div>

            {
              deletingUser && <ConfirmDeleteModal
                title={`Are you sure you want to delete?`}
                message={`If you delete ${deletingUser.name}. It cannot be undone.`}
                   successAction = {handleDeleteUser}
                    successButtonName="Delete"
                modalData = {deletingUser}
                    closeModal = {closeModal}
              >
              </ConfirmDeleteModal>
            }
        </div>
    );
};

export default Users;