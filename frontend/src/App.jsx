import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
    const [users, setUsers] = useState([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const loadUsers = async () => {
        try {
            const response = await axios.get('/api/users');
            setUsers(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        loadUsers();
    }, []);

    const addUser = async () => {
        if (!name || !email) return;

        await axios.post('/api/users', {
            name,
            email
        });

        setName('');
        setEmail('');

        loadUsers();
    };

    const deleteUser = async (id) => {
        await axios.delete(`/api/users/${id}`);

        loadUsers();
    };

    return (
        <div style={{ maxWidth: '800px', margin: '40px auto', padding: '20px' }}>
            <h1>DevOps Basics with Dali Students Portal</h1>
             <p>React • Node.js • PostgreSQL • Kubernetes</p>

            <div style={{ marginBottom: '20px' }}>
                <input
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{ marginRight: '10px' }}
                />

                <input
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ marginRight: '10px' }}
                />

                <button onClick={addUser}>
                    Add User
                </button>
            </div>

            <hr />

            {users.map((user) => (
                <div
                    key={user.id}
                    style={{
                        border: '1px solid #ddd',
                        padding: '10px',
                        marginTop: '10px'
                    }}
                >
                    <h3>{user.name}</h3>

                    <p>{user.email}</p>

                    <button onClick={() => deleteUser(user.id)}>
                        Delete
                    </button>
                </div>
            ))}
        </div>
    );
}

export default App;