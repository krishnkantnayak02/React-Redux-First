import  React  from 'react';
import  expect from 'expect';
import { mount  , shallow}  from 'enzyme';
import {ManageCoursePage} from '../ManageCoursePage';
import { Provider } from 'react-redux';

describe('Manage Course Page' , () => {
    it(' when user click submit without entered title' , () => {
    //    let wrapper = <Provider store = {""} > mount(<ManageCoursePage />) </Provider>
   const props  = {
       authors : [],
       actions : {saveCourse : () => { return Promise.resolve();}},
       course : {id : '' , watchHref : '' , title : '' , authorId : '' , lenght : '' , catagory : ''}
   };
    let wrapper = mount(<ManageCoursePage {...props}/>);
     const saveButton = wrapper.find('input').last();
     expect(saveButton.prop('type')).toBe('submit');
     saveButton.simulate('click');
     expect(wrapper.state().errors.title).toBe('Title must be at least 5 characters.');
     
    });
});