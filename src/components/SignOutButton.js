import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../store/loginSlice";

export function SignOutButton() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const profileState = useSelector(state => state.profile)

    return (
        <div className="signout-buttons">
            <div className="main-nav-item">
                <i className="fa fa-user-circle icon"></i>
                <span className="profile-name-button ">{profileState.firstName}</span>
            </div>
            <a className="main-nav-item" onClick={handleLogout}>
                <i className="fa fa-sign-out fa-lg icon"></i>
                Sign Out
            </a>
        </div>
    )

    function handleLogout() {
        dispatch(logout())
        navigate("/")
    }
}