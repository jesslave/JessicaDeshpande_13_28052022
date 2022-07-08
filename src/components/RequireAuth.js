import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export function RequireAuth({children}) {

    const state = useSelector((state) => state.credentials)
    if (!state.isLogged) {
        return <Navigate to="/sign-in"></Navigate>
    }

    return children;
}