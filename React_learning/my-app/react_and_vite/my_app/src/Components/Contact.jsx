export default function Contact({img,name,email,phone}){

    return(
    <div className="gr">
        <article className="contact-card">
            <img
                src={img}
                alt="Photo of Mr. Whiskerson"
            />
            <h3>{name}</h3>
            <div className="info-group">
                <img
                    src="public/phone.jpg"
                    alt="phone icon"
                />
                <p>{phone}</p>
            </div>
            <div className="info-group">
                <img
                    src="public/email.jpg"
                    alt="mail icon"
                />
                <p>{email}</p>
            </div>
        </article>
        </div>

    )
}