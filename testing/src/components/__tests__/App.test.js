import {render, screen} from '@testing-library/react';
import App from '../App';

test('renders hi there text', () => {
  render(<App/>);
  const text = screen.getByText(/Hi there!/i);
  expect(text).toBeInTheDocument();
});
