import {mount} from "enzyme";
import Root from "../Root";
import App from "../components/App";
import moxios from "moxios";

const responseData = [{name: "Fetched #1"}, {name: "Fetched #2"}]

beforeEach(() => {
    moxios.install();
    moxios.stubRequest("https://jsonplaceholder.typicode.com/comments", {
        status: 200,
        response: responseData
    });
});

afterEach(() => {
    moxios.uninstall();
});

it('can fetch a list of comments and display them', (done) => {
    const wrapped = mount(<Root><App/></Root>)
    wrapped.find('#fetch-comments-button').simulate('click')
    setTimeout(() => {
        wrapped.update();
        expect(wrapped.find('li').length).toEqual(responseData.length);
        wrapped.unmount();
        done();
    })
});