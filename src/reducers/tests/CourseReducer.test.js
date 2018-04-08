import expect from 'expect';
import  CourseReducer from '../CourseReducer';
import * as actions from '../../actions/CourseAction';

describe('Course Reducer' , () => {
  it('create course success' , () => {
      const initialState = [
        {title: 'A'},
        {title: 'B'}
    ];

     const newCourse = {
         title : 'c'
     };

     const action = actions.createCourseSuccess(newCourse);

     const newState = CourseReducer(initialState , action);
     expect(newState.length).toEqual(3);
     expect(newState[0].title).toEqual('A');
  });

  it('Update course ' , () => {
     let initialState = [
         {id : 'A' , title : 'A'},
         {id : 'B' , title : 'B'},
         {id : 'C' , title : 'C'}
     ]

     let course = {id : 'B' , title : 'New Title'};
     let action = actions.updateCourseSuccess(course);
      let updatedState = CourseReducer(initialState , action);

      let updatedCourse = updatedState.find(a => a.id == course.id);
      let notChanged= initialState.find(a => a.id == 'A');
      expect(updatedCourse.title).toEqual('New Title');
      expect(initialState[0].title).toEqual(notChanged.title);
      expect(initialState.length).toEqual(3);
  });
});