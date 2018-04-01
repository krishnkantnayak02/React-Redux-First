import * as types from './ActionTypes';
import authorApi from '../api/mockAuthorApi';
import { beginAjaxCall } from './AjaxStatusAction';

export function loadAuthorSuccess(authors) {
  return{
      type : types.LOAD_AUTHORS_SUCCESS, authors
  };
}
export function loadAuthors(){
  return function(dispatch){
      dispatch(beginAjaxCall());
    return authorApi.getAllAuthors().then( authors => {
        dispatch(loadAuthorSuccess(authors));
    }).catch(
        error => {
            throw(error);
        });
  };
}