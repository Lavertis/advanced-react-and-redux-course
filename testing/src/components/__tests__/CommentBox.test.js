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

describe('the text area', () => {
    const text = 'new comment';
    beforeEach(() => {
        wrapped.find('textarea').simulate('change', {
            target: {value: text}
        });
        wrapped.update();
    });

    it('has a text area that user can type in', () => {
        expect(wrapped.find('textarea').prop('value')).toEqual(text);
    });

    it('clears the textarea on form submission', () => {
        wrapped.find('form').simulate('submit');
        wrapped.update();
        expect(wrapped.find('textarea').prop('value')).toEqual('');
    });
});