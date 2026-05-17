import { getUserById } from '@/app/lib/data';
import React from 'react';

const UserDetailsPage = async ({ params }) => {
    const { userId } = await params;
    const user = await getUserById(userId);
    return (
        <div>
            <h1>User name: {user.name}</h1>
        </div>
    );
};

export default UserDetailsPage;