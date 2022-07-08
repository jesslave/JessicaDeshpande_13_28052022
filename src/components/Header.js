import { SignInButton } from './SignInButton';
import { SignOutButton } from './SignOutButton';
import bankLogo from '../assets/argentBankLogo.png';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


export function Header() {

    const navigate = useNavigate()
    const state = useSelector(state => state.credentials)

    return (
            <nav className="main-nav">
            <a className="main-nav-logo" onClick={navigateToHomePage}>
            <img
                className="main-nav-logo-image"
                src={bankLogo}
                alt="Argent Bank Logo"
            />
            <h1 className="sr-only">Argent Bank</h1>
            </a>
            {
            state.isLogged ? <SignOutButton /> : <SignInButton />
            }
        </nav>
    )
    function navigateToHomePage() {
        navigate("/")
      }
}