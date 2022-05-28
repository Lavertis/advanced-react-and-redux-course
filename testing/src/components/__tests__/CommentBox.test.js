import React from "react";
import {mount} from "enzyme";
import CommentBox from "components/CommentBox";

let wrapped;

beforeEach(() => {
    wrapped = mount(<CommentBox/>);
});

afterEach(() => {
    wrapped.unmount();
});

it('has a text area and a button', () => {
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(1);
});

it('has a text area that user can type in', () => {
    const text = 'new comment';
    wrapped.find('textarea').simulate('change', {
        target: {value: text}
    });
    expect(wrapped.find('textarea').prop('value')).toEqual(text);
});