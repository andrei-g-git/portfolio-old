import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Blog from '../components/Blog.jsx';
//import Post from '../components/Post.jsx'; //integration?

configure({ adapter: new Adapter() });

describe("Blog", () => {

    let wrapper = null;
    let setUp = (props) => {
        return shallow(<Blog {...props}/>);
    }

    it("displays the correct number of posts", () =>{
        const props = {
            posts: new PostsMock()
        }
        wrapper = setUp(props);

        const posts = wrapper.find(".post-test-wrapper");
        expect(posts.length).toBe(2);        
    });
});


class PostsMock {
    constructor(){
        this.posts = [
            {title: "blah", content: "blah blah blah"},
            {title: "lore ipsum", content: "loooore iiiiiipsum"}
        ];
    }

    getPosts(){return this.posts;}
}