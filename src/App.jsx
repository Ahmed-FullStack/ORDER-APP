import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router';
import Settings from './settings/settings';

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<BrowserRouter>
				<div
					style={{
						position: 'absolute',
						top: 0,
						left: 0,
						display: 'flex',
						justifyContent: 'space-around',
					}}
				>
					<NavLink to='/set' end>
						settings
					</NavLink>
					<NavLink to='/' end>
						hone
					</NavLink>
				</div>

				<Routes>
					<Route path='/set' element={<Settings />} />
				</Routes>
				<Routes>
					<Route path='/' element={<h3>home</h3>} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
