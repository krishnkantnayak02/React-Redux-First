import { mount , shallow } from 'enzyme';
import expect from 'expect';
import *  as types from '../ActionTypes';
import * as CourseAction from '../CourseAction';

describe('Course Actions' , () => {
   describe('Create Course Actions' ,  () => {
        it('Create Course Successs' , () => {1
            const course = {id : 'clean-code' ,  title : 'Clean Code'};
            const expectedAction = {
                type : types.CREATE_COURSE_SUCCESS , 
                course : course
            }
            const action = CourseAction.createCourseSuccess(course);
           
            expect(action).toEqual(expectedAction)
        });
   });
});