// // bootstrap component
// import { FormGroup } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';

// function BasicExample() {

//     // handle form submit
//     async function handleSubmit(e) {
//         e.preventDefault()
//         const formData = new FormData(e.target)
//         const response = await fetch('/api/form', {
//             method: 'POST',
//             body: new URLSearchParams(formData),
//         })
//         // Handle response if necessary
//         const data = await response.json()
//         console.log(data)
//         // alert Thank You 
//         alert('Thanks for contacting us, we will get back to you soon!');
//     }

//     return (
//         // Form
//         <Form onSubmit={handleSubmit} >
//             {/* title */}
//             <h1>
//                 Send Us an Email
//             </h1>
//             <p className='my-4'>We're happy to hear from you with any question you may have!</p>
//             {/* name */}
//             <FormGroup className="mb-3">
//                 <Form.Control name='name' type="name" placeholder="Your name" required />
//             </FormGroup>

//             {/* email */}
//             <Form.Group className="mb-3" controlId="formBasicEmail">
//                 <Form.Control name='email' type="email" placeholder="Your email" required />
//             </Form.Group>

//             {/* message */}
//             <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
//                 <Form.Control as="textarea" name='message' rows={3} placeholder="Your message" required />
//                 <p> We'll never share your email with anyone else.</p>
//             </Form.Group>

//             {/* submit button */}
//             <Button type="submit" variant="info" size='lg'>Submit</Button>
//         </Form>
//     );
// }

// export default BasicExample;