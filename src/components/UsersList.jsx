import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { MdDone, MdOutlineDoneAll } from "react-icons/md";

const UsersList = ({ user, index, users, setUsers }) => {
 
    const { _id, name, email, gender, status, isCompleted } = user;
  

    const handleDeleteUser = id => {
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

    // access user
    const handleAccessUser = id => {
                
                fetch(`http://localhost:5000/status/${id}`, {
                    method: "PUT"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.modifiedCount > 0) {
                            Swal.fire({
                                
                                text: "Users Accept",
                                icon: "success"
                            });

                            // const remaining = users.filter(us => us._id !== id)
                            // setUsers(remaining)
                           const newUser = users.map((user) => user._id === id ? {...user, isCompleted:true} : user);
                           setUsers(newUser);
                        };
                    })
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
                    <button onClick={()=>handleAccessUser(_id)} className="bg-pink-500 px-4 py-2 rounded text-white">
                        {isCompleted ? <MdOutlineDoneAll /> : <MdDone />}
                    </button>
                </th>
            </tr>

        </>
    );
};

export default UsersList;