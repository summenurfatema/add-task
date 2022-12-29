import { useContext } from "react";
import { AuthContext } from '../context/UserContext'
const PrivateRoute = ({ children }) => {
    const { loading, user } = useContext(AuthContext)
    const location = Location()
    if (loading) {
        return <progress className="progress w-56"></progress>
    }
    if (user) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>


};

export default PrivateRoute;