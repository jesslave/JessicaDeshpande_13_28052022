import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { UserService } from "../../api/UserService"
import { provide } from "../../store/profileSlice"
import './Profile.css'

export function Profile(props) {
    const [data, setData] = useState({ firstName: "loading", lastName: "loading" })
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    
    const userService = UserService()
    const credentialState = useSelector(state => state.credentials)
    const dispatch = useDispatch();
    const [showEdition, setShowEdition] = useState(false)

    useEffect(() => {
        userService.getUserProfile(credentialState.authorization)
            .then((response) => {
                setData(response.data.body)
                dispatch(provide(response.data.body.firstName))
            })
            .catch(error => console.log(error))
    }, [])

    return (
        <div className="profile">
            <main className="main-profile bg-profile">
                <div className="header">
                    <h1 className="profile-title">Welcome back</h1>
                    {
                        !showEdition &&
                            <h1 className="title-name">{data.firstName} {data.lastName}</h1>
                    }
                    <form onSubmit={handleSubmit}>
                        {
                        showEdition &&
                            <div className="input-wrapper-profile">
                                <div className="inputs">
                                    <input placeholder={data.firstName} className="input" name="nom" type="text" onChange={(e) => setLastName(e.target.value)} value={lastName} />
                                    <input placeholder={data.lastName} className="input" name="prenom" type="text" onChange={(e) => setFirstName(e.target.value)} value={firstName} />
                                </div>
                                <div className="buttons">
                                    <button className="edit-button">Save</button>
                                    <button className="edit-button " onClick={() => setShowEdition(false)}>Cancel</button>
                                </div>
                            </div>
                        }
                    </form>
                        {
                            !showEdition &&
                                <button className="edit-button" onClick={() => setShowEdition(true)}>Edit</button>
                        }   
                </div>
                <h2 className="sr-only">Accounts</h2>
                <section className="account">
                    <div className="account-content-wrapper">
                        <h3 className="account-title">Argent Bank Checking (x8349)</h3>
                        <p className="account-amount">$2,082.79</p>
                        <p className="account-amount-description">Available Balance</p>
                    </div>
                    <div className="account-content-wrapper cta">
                        <button className="transaction-button">View transactions</button>
                    </div>
                </section>
                <section className="account">
                    <div className="account-content-wrapper">
                        <h3 className="account-title">Argent Bank Savings (x6712)</h3>
                        <p className="account-amount">$10,928.42</p>
                        <p className="account-amount-description">Available Balance</p>
                    </div>
                    <div className="account-content-wrapper cta">
                        <button className="transaction-button">View transactions</button>
                    </div>
                </section>
                <section className="account">
                    <div className="account-content-wrapper">
                        <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
                        <p className="account-amount">$184.30</p>
                        <p className="account-amount-description">Current Balance</p>
                    </div>
                    <div className="account-content-wrapper cta">
                        <button className="transaction-button">View transactions</button>
                    </div>
                </section>
            </main>
        </div>
    )

    function handleSubmit(event) {
        event.preventDefault();
        userService.editProfile(credentialState.authorization, {firstName, lastName})
        .then(response => {
            setData({firstName, lastName})
            setFirstName("")
            setLastName("")
            dispatch(provide(firstName))
            setShowEdition(false)
        })
        .catch(error => console.log(error))
        
    }
}