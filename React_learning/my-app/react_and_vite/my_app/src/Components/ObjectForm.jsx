import React from "react"
import Star from './Star.jsx'
export default function ObjectForm() {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (212) 555-1212",
        email: "itsmyrealname@example.com",
        isFilled: false
    })


    function toggleFavorite() {
        setContact(prevContact =>({
            ...prevContact,
            isFavorite:!prevContact.isFavorite
        }))
    }
    

    return (
        <main className="main2">
            <article className="card2">
                <img
                    src='public/avatar.jpg'
                    className="avatar"
                    alt="User profile picture of John Doe"
                />
                <div className="info">
                    <Star isFilled={contact.isFavorite} onClick={toggleFavorite}/>

                                        <h2 className="name">
                        {contact.firstName} {contact.lastName}
                    </h2>
                    <p className="contact">{contact.phone}</p>
                    <p className="contact">{contact.email}</p>
                </div>

            </article>
        </main>
    )
}
