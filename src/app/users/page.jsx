import React from 'react';
import { getUsers } from '../lib/data';
import UsersTable from '../components/UsersTable';
import { deleteUser } from '../lib/actions';

const UsersPage = async () => {
    const users = await getUsers();
    console.log(users)
    return (
        <div>
            <h1>Welcome to users</h1>
            <h1>Total users: {users.length}</h1>
            <UsersTable users={users} deleteUserAction={deleteUser}></UsersTable>
        </div>
    );
};

export default UsersPage;