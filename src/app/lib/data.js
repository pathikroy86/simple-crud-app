export async function getUsers() {
    const res = await fetch('http://localhost:5000/users');
    const data = await res.json();
    return data;
}

export async function getUserById(id) {
    const res = await fetch(`http://localhost:5000/users/${id}`);
    const data = await res.json();
    return data;
}