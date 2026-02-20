import React from "react"
export default function ObjectForm() {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (212) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false
    })
 let starIcon = contact.isFavorite ? 'public/filled.jpg': 'public/empty.jpg'

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
                    <button
                        onClick={toggleFavorite}
                        aria-pressed={false}
                        aria-label={contact.isFavorite ? "Remove from favorites" : "Add to favorites"}
                        className="favorite-button"
                    >
                         <img
                            src={starIcon}
                            alt={contact.isFavorite ? "filled star icon" : "empty star icon"}
                            className="favorite"
                        />
                       
                    </button>
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
