import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import LinkButton from '../components/LinkButton.jsx';

configure({adapter: new Adapter()});

describe("LinkButton", () =>{
    let wrapper = null;
    let setUp = (props) => {
        return shallow(<LinkButton {...props}/>);
    }

    it("blah", () => {

    });
});
