import { render, screen } from '@testing-library/react';
import Spinner from '../Spinner';

describe('<Spinner />', () => {
	it('renders without crushing', () => {
		const div = document.createElement('div');
		render(<Spinner />, div);
		const spinner = screen.getByTestId('spinner');
		expect(spinner).toBeInTheDocument();
	});
});
