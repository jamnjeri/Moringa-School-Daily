import { useEffect, useState } from 'react';
import { Table, Tbody, Tr, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import { TrashIcon } from '@heroicons/react/solid';

function UserList() {

    const [users, setUsers] = useState([]);
    const [name, setName] = useState('');
    const [role, setRole] = useState('');

    useEffect(() => {
        fetch(' http://127.0.0.1:3000/users')
            .then(res => res.json())
            .then(data => setUsers(data))
            .catch(err => console.error(err));
    }, []);

    const handleDelete = (userId) => {
        fetch(`http://127.0.0.1:3000/${userId}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    setUsers(prevUsers => prevUsers.filter(user => user.id !== userId));
                }
            })
            .catch(err => console.error(err));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch(' http://127.0.0.1:3000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                role
            })
        })

            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    setUsers(prevUsers => [...prevUsers, data.user]);
                    setName('');
                    setRole('');
                }
            })
            
            .catch(err => console.error(err));
    };
    return (
        <section class="gradient-form h-full bg-neutral-200 dark:bg-neutral-700">
        <div>
            <Table>
                <thead>
                    <Tr>
                        <Td>User</Td>
                        <Td>User-ID</Td>
                        <Td>Role</Td>
                        <Td>Action</Td>
                    </Tr>
                </thead>
                <Tbody>
                    {users.map(user => (
                        <Tr key={user.id}>
                            <Td>{user.username}</Td>
                            <Td>{user.id}</Td>
                            <Td>{user.role}</Td>
                            <Td>
                                <button onClick={() => handleDelete(user.id)}>
                                    <TrashIcon className="h-5 w-5 text-red-500" />
                                </button>
                            </Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
                <div class="container h-full p-10">
                    <div
                        class="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
                        <div class="w-auto">
                            <div
                                class="block rounded-3xl"
                                style={{
                                    background: 'linear-gradient(to top, #101F3C, white, white, white, white, white)'
                                }}>
                                <div class="g-0 lg:flex lg:flex-wrap">
                                    <div class="md:mx-6 md:p-12">
                                        <form onSubmit={handleSubmit}>
                                            <div className="my-4">
                                                <label className="relative mb-4"
                                                    htmlFor="name" data-te-input-wrapper-init>
                                                    Name
                                                </label>
                                                <input
                                                    className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                                    type="text"
                                                    id="name"
                                                    value={name}
                                                    onChange={event => setName(event.target.value)}
                                                />
                                            </div>
                                            <div className="my-4">
                                                <label className="relative mb-4" htmlFor="role" data-te-input-wrapper-init>
                                                    Role
                                                </label>
                                                <input
                                                    className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                                    type="text"
                                                    id="role"
                                                    value={role}
                                                    onChange={event => setRole(event.target.value)}
                                                />
                                            </div>
                                            <div className="my-4">
                                                <button className="btn btn-primary" type="submit">Add User</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        </section>
    );
}
export default UserList;