import { render, screen } from '@testing-library/react';
import App from './App';

test('renders an h1 tag', () => {
  const app = render(<App />);
	const heading = app.getByRole('heading');
	expect(heading).toHaveTextContent('Super Duper Company');
});