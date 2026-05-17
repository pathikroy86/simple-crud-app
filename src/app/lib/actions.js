export const deleteUser = async (userId) => {
    'use server'
    const res = await fetch(`http://localhost:5000/users/${userId}`, {
        method: 'DELETE'
    });
    const user = await res.json();
    console.log('after delete', user);
    return user;
}