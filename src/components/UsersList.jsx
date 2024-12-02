import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const UsersList = ({ user, index, users, setUsers }) => {
    // console.log(user)
    const { _id, name, email, gender, status } = user;

    const handleDeleteUser = id => {
        console.log(id)

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                // user delete form database
                fetch(`http://localhost:5000/users/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Users Successfully Delete",
                                icon: "success"
                            });

                            const remaining = users.filter(us => us._id !== id)
                            setUsers(remaining)
                        }
                    })
            }



        });
    }
    return (

        <>
            {/* row 1 */}
            <tr className="bg-base-100 hover:bg-base-200">
                <th>{index}</th>
                <td>{name}</td>
                <td>{email}</td>
                <td>{gender}</td>
                <td>{status}</td>
                <th className="flex gap-2">
                    <Link to={`/update/${_id}`}>
                        <button className="btn btn-accent">E</button>
                    </Link>
                    <button onClick={() => handleDeleteUser(_id)} className="btn btn-error">X</button>
                </th>
            </tr>

        </>
    );
};

export default UsersList;