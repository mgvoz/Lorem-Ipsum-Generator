import './index.css';
import React, { useState } from 'react';
import data from './data';

function App() {
	const [paragraphs, setParagraphs] = useState(0);
	const [text, setText] = useState(0);
	const [warning, setWarning] = useState('');
	let newText = data.slice(0, paragraphs);

	let id = '_' + Math.random().toString(36).substr(2, 9);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (text && text < 10) {
			setParagraphs(text);
			newText = '';
			setWarning('');
		}
		if (text && text > 9) {
			setWarning('9-Paragraph Maximum');
			setParagraphs(0);
		}
	};

	const generate = newText.map((para, id) => <p key={id}>{para}</p>);

	return (
		<section className='section-center'>
			<h3>tired of boring lorem ipsum?</h3>
			<form className='lorem-form' onSubmit={handleSubmit}>
				<label htmlFor='amount'>paragraphs:</label>
				<input
					type='number'
					name='amount'
					id='amount'
					value={text}
					onChange={(e) => setText(e.target.value)}
				></input>
				<button type='submit' className='btn'>
					generate
				</button>
			</form>
			<p>{warning}</p>
			<article className='lorem-text'>{generate}</article>
		</section>
	);
}

export default App;
