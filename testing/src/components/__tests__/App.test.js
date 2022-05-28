import {render, screen} from '@testing-library/react';
import App from '../App';

it('shows a comment box', () => {
  render(<App/>);
  const commentBoxText = screen.getByText(/CommentBox Component/i)
  expect(commentBoxText).toBeInTheDocument();
});
