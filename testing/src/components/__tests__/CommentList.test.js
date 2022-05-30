import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import CommentList from '../CommentList';
import Root from "../../Root";
import {mount} from "enzyme";

let wrapped;
let comments = ['Comment 1', 'Comment 2']

beforeEach(() => {
    const initialState = {
        comments: comments
    }
    wrapped = mount(<Root initialState={initialState}><CommentList/></Root>)
})

it('creates one <li></li> per comment', () => {
    expect(wrapped.find('li').length).toEqual(comments.length);
});

it('shows the text for each comment', () => {
    comments.forEach(comment => {
        expect(wrapped.render().text()).toContain(comment);
    })
});