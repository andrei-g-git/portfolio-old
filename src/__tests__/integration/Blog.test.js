import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Blog from '../../components/Blog.jsx';
import LinkButton from '../../components/LinkButton.jsx';
import { Link, Route, BrowserRouter } from 'react-router-dom';

configure({ adapter: new Adapter() });

describe("Blog", () => {

    let wrapper = null;
    let setUp = (props) => {
        return mount(<BrowserRouter><Blog {...props}/></BrowserRouter>);
    }

    it("routes to the right url when pressing to expand a post", () => {
        const props = {
            posts: new PostsMock()
        }
        wrapper = setUp(props);

        const linkButton = wrapper.find(".link-button");
        const urlFilePath = linkButton.find(Route).prop("path");
        linkButton.simulate("click");
        expect(urlFilePath).toBe("/blog/this-should-have-hyphens"); //does requiring the url category to be 'blog' make this brittle?
    });
});

class PostsMock {
    constructor(){
        this.posts = [
            {title: "this should have hyphens", dayMonthYear: "4/March/2021", ops: [{insert: "loooore iiiiiipsum"}]}
        ];
    }

    getPosts(){return this.posts;}
}