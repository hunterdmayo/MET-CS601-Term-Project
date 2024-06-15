import '../assets/contact.css'

function Contact() {
    return (
        <div className="container-contact">
            <h1>Let's Get In Touch!</h1>
            <h2>You can contact me at the following:</h2>
            <div>
                <a className='contact-type' href='https://www.linkedin.com/in/hunterdmayo/'>LinkedIn</a>
                <div className='email'>Email: hmayo@bu.edu</div>
            </div>
        </div>
    );
}

export default Contact;