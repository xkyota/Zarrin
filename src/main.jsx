import './styles/normalize.css';

import { StrictMode } from 'react';

import { createRoot } from 'react-dom/client';

import Header from './components/Header';
import RecentPosts from './components/RecentPosts';

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<Header />
		<RecentPosts />
	</StrictMode>
);
