import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import CourseList from '../CourseList';


function setUp(){
    let props =  {
        courses : [{ id: "test",
        title: "test",
        watchHref: "tests",
        authorId: "test",
        length: "5:08",
        category: "test"}]
    };
   let renderer = TestUtils.createRenderer();
   renderer.render( <CourseList courses = {props.courses} />);
   let output = renderer.getRenderOutput();
    return{
        output
    };
}

describe('Course List test with test utils ' , () => {
    it('Component Structure  with out course data' , () => {
      const { output } = setUp();
      expect(output.type).toBe('table');
    });

    it('Component Structure  with  course data' , () => {
        let props =  {
            courses : [{ id: "test",
            title: "test",
            watchHref: "tests",
            authorId: "test",
            length: "5:08",
            category: "test"}]
        };
        let renderer = TestUtils.createRenderer();
        renderer.render( <CourseList courses = {props.courses} />);
        let output = renderer.getRenderOutput();
        expect(output.type).toBe('table');
        let [ thead ] = output.props.children;
        expect(thead.type).toBe('thead');
      });
});