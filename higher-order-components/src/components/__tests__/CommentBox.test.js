import React from "react";
import {mount} from "enzyme";
import CommentBox from "components/CommentBox";
import Root from "../../Root";

let wrapped;

beforeEach(() => {
    wrapped = mount(<Root><CommentBox/></Root>);
});

afterEach(() => {
    wrapped.unmount();
});

it('has a text area and two buttons', () => {
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(2);
});

describe('the text area', () => {
    const comment = 'new comment';
    beforeEach(() => {
        wrapped.find('textarea').simulate('change', {
            target: {value: comment}
        });
        wrapped.update();
    });

    it('has a text area that user can type in', () => {
        expect(wrapped.find('textarea').prop('value')).toEqual(comment);
    });

    it('clears the textarea on form submission', () => {
        wrapped.find('form').simulate('submit');
        wrapped.update();
        expect(wrapped.find('textarea').prop('value')).toEqual('');
    });
});