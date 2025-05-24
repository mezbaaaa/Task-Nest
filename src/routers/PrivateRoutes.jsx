import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useLocation, useNavigate } from 'react-router';
import Swal from 'sweetalert2';

const PrivateRoutes = ({children}) => {
    const { user, loading } = useContext(AuthContext); 
    const location = useLocation();
    const navigate = useNavigate();

    if (loading) {
        return (
            <div className="flex justify-center items-center my-auto h-screen">
                <span className="loading loading-spinner loading-lg text-pink-500"></span>
            </div>
        );
    }

    if (!user) {
        Swal.fire({
            title: "Login Required",
            text: "You need to login to access this page.",
            icon: "warning",
            showConfirmButton: true,
            confirmButtonColor: "#f472b6",
            timerProgressBar: true,
        }).then((result) => {
            if (result.isConfirmed) {
                navigate('/login', { state: { from: location }, replace: true });
            } else {
                navigate('/login');
            }
        });

        return null;
    }
    return children;
};

export default PrivateRoutes;