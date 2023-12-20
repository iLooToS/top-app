import { Button, Htag, P, Tag } from '../components';
import React, { useEffect, useState } from 'react';

export default function Home(): JSX.Element {
	const [counter, setCounter] = useState<number>(0);

	useEffect(() => {
		console.log('Counter ' + counter);
		return function cleanup() {
			console.log('Unmount');
		};
	});

	useEffect(() => {
		console.log('Mounted');
	}, []);

	return (
		<>
			<Htag tag='h1'>{counter}</Htag>
			<Button apperance='primary' arrow='right' onClick={() => setCounter(x => x + 1)}>Кнопка</Button>
			<Button apperance='ghost' arrow='down'>Кнопка</Button>
			<P size='l'>Большой</P>
			<P>Средний</P>
			<P size='s'>Маленький</P>
			<Tag size='s'>Ghost</Tag>
			<Tag size='m' color='red'>Red</Tag>
			<Tag size='s' color='green'>Green</Tag>
			<Tag color='primary'>Primary</Tag>
		</>
	);
}
