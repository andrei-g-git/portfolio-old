import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Blog from '../components/Blog.jsx';
//import Post from '../components/Post.jsx'; //integration?
import { convertOpsToHtml } from '../components/Blog.jsx';

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

    it("converts the received json post data into html", () => {
        //setupHelper(wrapper, setUp); probably don't need to mount

        const quillOpsDelta = [{"attributes": {"bold": true},insert: "blah blah blah"}];
        const html = convertOpsToHtml(quillOpsDelta); //this should be in it's own separate test, and the method should have it's own file

        //expect(html).toContain("<p><strong>blah blah blah</strong></p>");
        expect( 
            (html === "<p><b>blah blah blah</b></p>")
            || (html === "<p><strong>blah blah blah</strong></p>")
        ).toBeTruthy(); //apparently I shouldn't be doing this but whatever
    });
    //is this white box testing?
    // it("converts a post's title from 'word another word' to a 'word-another-word' format for link concatination", () => {
    //     wrapper = shallow(<Blog posts={null} />);

    //     const urlFilePath = wrapper.instance().convertToUrlFilePath("this should have hyphens");
    //     expect(urlFilePath).toBe("this-should-have-hyphens");        
    // });
});

const setupHelper = (wrapper, setUp) => {
    const props = {
        posts: new PostsMock()
    }
    wrapper = setUp(props);
}

class PostsMock {
    constructor(){
        this.posts = [
            {title: "blah blah", dayMonthYear: "4/March/2021", ops: [{                "attributes": {
                    "bold": true
                },
                insert: "blah blah blah"}]},
            {title: "lore ipsum", dayMonthYear: "4/March/2021", ops: [{insert: "loooore iiiiiipsum"}]}
        ];
    }

    getPosts(){return this.posts;}
}