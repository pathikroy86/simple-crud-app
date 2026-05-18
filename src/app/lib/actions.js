import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const createUser = async (formData) => {
    'use server'
    const newUser = Object.fromEntries(formData.entries());
    const res = await fetch('http://localhost:5000/users', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(newUser)
    })
    const data = await res.json();
    if (data.insertedId) {
        revalidatePath('/users');
    }
    return data;
}

export const updateUser = async (userId, formData) => {
    'use server';
    const updateUser = Object.fromEntries(formData.entries());
    const res = await fetch(`http://localhost:5000/users/${userId}`, {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(updateUser)
    })
    const data = await res.json();
    console.log('after update', data);
    if (data.modifiedCount > 0) {
        revalidatePath('/users');
        redirect('/users')
    }
    return data;
}

export const deleteUser = async (userId) => {
    'use server'
    const res = await fetch(`http://localhost:5000/users/${userId}`, {
        method: 'DELETE'
    });
    const user = await res.json();
    console.log('after delete', user);
    if (user.deletedCount > 0) {
        revalidatePath('/users')
    }
    return user;
}