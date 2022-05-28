import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CommentList from '../CommentList';

describe('<CommentList />', () => {
    test('it should mount', () => {
        render(<CommentList/>);

        const commentList = screen.getByTestId('CommentList');

        expect(commentList).toBeInTheDocument();
    });
});