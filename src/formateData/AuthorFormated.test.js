import React from 'react';
import { shallow , mount } from 'enzyme';
import expect from 'expect';
import {authorFormatedDropDown} from './AuthorFormated';

describe('Author Formated ' , () => {
  describe('Authors formated for dropDown' , () => {
  

      
    it('should return formated data for drop down ' , () => {
       
        const authors = 
        [
            {
                id: 'cory-house',
                firstName: 'Cory',
                lastName: 'House'
              }
        ];

        const expectedAuthors = 
                [
                    {value : 'cory-house' , text : 'Cory House'}];

                expect(authorFormatedDropDown(authors)).toEqual(expectedAuthors);
    });
  });
});