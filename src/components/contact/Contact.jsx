import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Button from 'react-bootstrap/Button';
import {Form, Row, Col} from 'react-bootstrap';
import ErrorMessage from './ErrorMessage';

const phoneRegExp = /^[0-9]*$/

const schema = yup.object().shape({
	firstname: yup.string().required('*First name required').min(2, 'Minimum 2 characters'),
	lastname: yup.string().required('*Last name required').min(2, 'Minimum 2 characters'),
	email: yup.string().required('*Email required').email(),
	phone: yup.string().required('*Phone required').matches(phoneRegExp, 'Phone number is not valid').min(8, 'Minimum 8 characters'),
	subject: yup.string().required('*Subject required').min(2, 'Minimum 2 characters'),
	question: yup.string().required('*Question required').min(10, 'Minimum 10 characters')
});

export default function LoginForm(){
    const { register, handleSubmit, errors } = useForm({
		resolver: yupResolver(schema)
    });

    function onSubmit(data) {
		console.log('Message have been sent, heres your data:', data);
		document.getElementById('myForm').style.display='none';
		document.getElementById('messageSent').style.display='block';
	}

    return(
		<>
		<Row id='messageSent' style={{display: "none"}}>
			<Col>
				<h1>Your question have been sent!</h1>
			</Col>
		</Row>
        <Form  id='myForm' className='bg-light rounded border border-info p-5' onSubmit={handleSubmit(onSubmit)}>
			
			<Form.Row>
				<Form.Group as={Col}>
					<Form.Label>First Name</Form.Label>
					<Form.Control name='firstname' placeholder='first name' ref={register} />
					{errors.firstname ? <ErrorMessage>{errors.firstname.message}</ErrorMessage> : null}
				</Form.Group>

				<Form.Group as={Col}>
					<Form.Label>Last Name</Form.Label>
					<Form.Control name='lastname' placeholder='last name' ref={register} />
					{errors.lastname ? <ErrorMessage>{errors.lastname.message}</ErrorMessage> : null}
				</Form.Group>
			</Form.Row>

			<Form.Row md={6}>
				<Form.Group as={Col}>
					<Form.Label>Email</Form.Label>
					<Form.Control type='email' name='email' placeholder='email' ref={register} />
					{errors.email ? <ErrorMessage>{errors.email.message}</ErrorMessage> : null}
				</Form.Group>

				<Form.Group as={Col}>
                <Form.Label>Phone</Form.Label>
					<Form.Control type='text' name='phone' placeholder='phone' ref={register} />
					{errors.phone ? <ErrorMessage>{errors.phone.message}</ErrorMessage> : null}
				</Form.Group>
			</Form.Row>

			<Form.Row>
				<Form.Group as={Col}>
					<Form.Label>Subject</Form.Label>
					<Form.Control type='text' name='subject' placeholder='subject' ref={register} />
					{errors.subject ? <ErrorMessage>{errors.subject.message}</ErrorMessage> : null}
				</Form.Group>
			</Form.Row>

			<Form.Row>
				<Form.Group as={Col}>
					<Form.Label>Question</Form.Label>
					<Form.Control as="textarea" type='text' name='question' placeholder='question' ref={register} />
					{errors.question ? <ErrorMessage>{errors.question.message}</ErrorMessage> : null}
				</Form.Group>
			</Form.Row>

            <Button className='bg-info' type='submit'>Submit</Button>
        </Form>
		</>
    )
}