import { useLoaderData } from "react-router-dom";
import UsersList from "./UsersList";
import { useState } from "react";


const Dashboard = () => {
    const usersData = useLoaderData();
    const [users, setUsers] = useState(usersData);
    // console.log(usersData)
    return (
        <div className="my-20">
            <h2 className="text-2xl font-semibold text-center">My Projects all users</h2>

            <div className="overflow-x-auto py-8">
                <table className="table ">
                    {/* head */}
                    <thead className="bg-gray-800 text-white">
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Gender</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className="">
                        
                        {
                            users.map((user, index) => <UsersList key={user._id} user={user} index={index + 1} users={users} setUsers={setUsers}> </UsersList>)
                        }
                    </tbody>
                </table>

            </div>
        </div>
    );
};

export default Dashboard;