import React from 'react'
import './user.css'
import { useNavigate } from "react-router"

const User = ({ user , setUser}) => {
    

    let navigate = useNavigate();

    

    const handleSignOut = () => {
        setUser("");
        navigate("/", { replace: true });
    } 
    return (
        <> 
            <div className="dropdown">
                <button type="button" className="btn btn-outline-danger  rounded-pill ms-4 dropdown-toggle" data-bs-toggle="dropdown">
                {`Hi ${user}`}
                </button>
                <ul className="dropdown-menu py-4">
                <button type="button" className="btn btn-dark mx-4 rounded-pill" onClick={handleSignOut}>
                sign out
                </button>
                </ul>
            </div>



        </>
    );
}

export default User;