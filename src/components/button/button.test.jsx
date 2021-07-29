import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Button from './Button.jsx'
import actionAgregar from './button.stories'

configure({ adapter: new Adapter() })

// const wrapper = mount(<Button actionAgregar={actionAgregar} />);

// describe("buton", () => {
//     it("open form add Product ", () => {
//         wrapper.find("button").at(0).simulate("click");
//     });
// });
