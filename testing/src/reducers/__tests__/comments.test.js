import commentsReducer from 'reducers/comments';
import {SAVE_COMMENT} from "../../actions/types";

it('handles actions of type SAVE_COMMENT', function () {
    const comment = 'new comment';
    const action = {
        type: SAVE_COMMENT,
        payload: comment
    }
    const newState = commentsReducer([], action);
    expect(newState).toEqual([comment]);
});

it('handles action with unknown type', function () {
    const newState = commentsReducer([], {});
    expect(newState).toEqual([]);
});