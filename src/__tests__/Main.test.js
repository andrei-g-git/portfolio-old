import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Main from '../components/Main.jsx';
import { Link } from 'react-router-dom'; //it's a generic dependency but doesn't this make the test brittle if not an out right integration test? maybe I waon't use react router in the future

configure({adapter: new Adapter()});

describe("Main", () => {
    let wrapper = null;
    // let setUp = () => {
    //     return shallow(<Main/>);
    // }

    it("has the right nav links", () => {
        wrapper = shallow(<Main/>);
        expect(wrapper.find(Link)/* [0] */.prop("to")).toBe("/"); //brittle unless I want a specific nav link order
        //no idea how to find the other links
    });
});