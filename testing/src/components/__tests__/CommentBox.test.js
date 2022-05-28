import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CommentBox from '../CommentBox';

describe('<CommentBox />', () => {
    test('it should mount', () => {
        render(<CommentBox/>);

        const commentBox = screen.getByTestId('CommentBox');

        expect(commentBox).toBeInTheDocument();
    });
});