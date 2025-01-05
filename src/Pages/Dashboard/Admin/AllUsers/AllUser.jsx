import { useQuery } from '@tanstack/react-query';
import { FaTrash, FaUser } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';

const AllUser = () => {
    const axiosSecure = useAxiosSecure();
    // used tanstack query
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    });

    // make admin
    const handleMakeAdmin = user => {
        axiosSecure.patch(`/users/admin/${user._id}`).then(res => {
            console.log(res.data);
            if(res.data.modifiedCount > 0) {
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is an admin Now`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        });
    };

    // delete method
    const handleDeleteUser = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(result => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/users/${id}`).then(res => {
                    if (res.data.deletedCount > 0) {
                        refetch();
                        Swal.fire({
                            title: 'Deleted!',
                            text: 'Your file has been deleted.',
                            icon: 'success'
                        });
                    }
                });
            }
        });
    };

    return (
        <div className="bg-white px-8 lg:px-12 pt-6 lg:pb-12 pb-8 mt-6 rounded-lg shadow-lg">
            <div className="flex justify-evenly my-8">
                <h2 className="text-2xl font-bold">All Users</h2>
                <h2 className="text-2xl font-bold">Total Users: {users.length}</h2>
            </div>

            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr className="bg-[#D1A054] text-white font-bold">
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    {user.role === 'admin' ? (
                                        'Admin'
                                    ) : (
                                        <button onClick={() => handleMakeAdmin(user)} className="btn bg-[#D1A054] text-white hover:text-[#D1A054] hover:border-[#D1A054] btn-md">
                                            <FaUser />
                                        </button>
                                    )}
                                </td>
                                <td>
                                    <button onClick={() => handleDeleteUser(user._id)} className="btn bg-rose-600 text-white hover:text-rose-600 hover:border-rose-600 btn-md">
                                        <FaTrash />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUser;
