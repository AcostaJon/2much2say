'use client'
function ContactForm() {

    // handle form submit
    function handleSubmit(e) {
        // prevent page refresh
        e.preventDefault()
        // reset form values
        e.target[0].value = ''
        e.target[1].value = ''
        e.target[2].value = ''
        alert('Thanks for contacting us, we will get back to you soon!');
    }

    return (
        <>
            <p className="w-75 mx-auto">Feel free to reach out we would love to hear your feed back</p>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <input className="w-75 mx-auto ps-2 py-2" name='name' type="name" placeholder="Your name" required />
                </div>
                <div className="mb-3">
                    <input className="w-75 mx-auto ps-2 py-2" name='email' type="email" placeholder="Your email" required />
                </div>
                <div className="mb-3">
                    <textarea className="w-75 mx-auto ps-2 py-2" as="textarea" name='message' rows={3} placeholder="Your message" required />
                </div>
                <p>Your information is private with us</p>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    );
}

export default ContactForm;