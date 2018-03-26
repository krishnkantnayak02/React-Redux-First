import React , {PropTypes} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as  CourseAction from '../../actions/CourseAction';
import  CourseList  from './CourseList';
import { browserHistory } from 'react-router';
 
class CoursePage extends React.Component {

    constructor(){
        super();
        this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
         }

    redirectToAddCoursePage(){
        browserHistory.push('/course');
    }
    render(){
        const {courses} = this.props;
         return(
        <div>
            <h1>Courses</h1>
            <input 
               type = "submit"
               value = "Add Course"
               className = "btn btn-primary"
               onClick = {this.redirectToAddCoursePage}
               />
            <CourseList courses = {courses} />
           
        </div>
        );
    }
}

function mapStateToProps(state , ownProps){
    return{
      courses : state.courses
    };
}

// function mapDispatchToProps(dispatch){
//   return{
//       createCourse : course => dispatch(CourseAction.createCourse(course))
//   }
// }

function mapDispatchToProps(dispatch){
    return{
        actions : bindActionCreators(CourseAction , dispatch)
    };
  }


CoursePage.propTypes = {
    actions : PropTypes.object.isRequired,
    courses: PropTypes.array.isRequired
  };


export default connect(mapStateToProps, mapDispatchToProps) (CoursePage);