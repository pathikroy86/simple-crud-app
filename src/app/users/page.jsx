import React from 'react';
import { getUsers } from '../lib/data';
import UsersTable from '../components/UsersTable';
import { createUser, deleteUser } from '../lib/actions';
import AddUserForm from '../components/AddUserForm';

const UsersPage = async () => {
    const users = await getUsers();
    return (
        <div className='mt-10 w-11/12 mx-auto'>
            <div className='flex justify-between items-center mb-5 w-11/12 mx-auto'>
                <div className='bg-gray-300 p-5 rounded-xl space-y-2'>
                    <h1>Welcome to users</h1>
                    <h1>Total users: {users.length}</h1>
                </div>
                <div>
                    <AddUserForm newUserAction={createUser}></AddUserForm>
                </div>
            </div>

            <UsersTable users={users} deleteUserAction={deleteUser}></UsersTable>
        </div>
    );
};

export default UsersPage;