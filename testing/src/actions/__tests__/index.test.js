import {saveComment} from "../index";
import {SAVE_COMMENT} from "../types";


describe('saveComment', () => {
    it('has the correct type', function () {
        const action = saveComment();
        expect(action.type).toEqual(SAVE_COMMENT);
    });
    it('has the correct payload', function () {
        const comment = 'new comment';
        const action = saveComment(comment);
        expect(action.payload).toEqual(comment);
    });
});