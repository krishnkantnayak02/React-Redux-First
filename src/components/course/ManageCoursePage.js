import React , { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/CourseAction';
import CourseForm from './CourseForm';

class ManageCoursePage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            course : Object.assign({} , this.props.course),
            errors : {}  
        };
        this.updateCourseState = this.updateCourseState.bind(this);
        this.saveCourse = this.saveCourse.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        debugger;
        // if (this.props.course.id != nextProps.course.id) {
          // Necessary to populate form when existing course is loaded directly.
          this.setState({course: Object.assign({}, nextProps.course)});
        // }
      }
    

    updateCourseState(event){
        const field =  event.target.name;
        let course = this.state.course;
        course[field] = event.target.value;
        return this.setState({course : course});
        }

    saveCourse(event){
        event.preventDefault();
        this.props.actions.saveCourse(this.state.course);
        this.context.router.push('/courses');
    }

    render(){
        return(
            
                <CourseForm 
                course = {this.state.course}
                allAuthors = {this.props.authors}
                onChange= {this.updateCourseState}
                onSave = {this.saveCourse}
                errors  = {this.state.errors}
                />
        );
    }
}

ManageCoursePage.propTypes = {
    course: PropTypes.object.isRequired,
    authors: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  };

ManageCoursePage.contextTypes = {
    router: PropTypes.object
};

function getCourseById(course, id){
    const courseById = course.filter(course => course.id == id);
    if(courseById){
        return courseById[0];
    } 
    // return null;
}

function mapStateToProps(state, ownProps){
    debugger
    const  courseId = ownProps.params.id;

    let course = {id : '' , watchHref : '' , title : '' , authorId : '' , lenght : '' , catagory : ''};
if(courseId){
    course = getCourseById(state.courses, courseId);
}
    const authorFormatedDropDown = state.authors.map(author => {
        return{
            value : author.id,
            text : author.firstName + ' ' + author.lastName
        };
    });

    return{
        course : course,
        authors : authorFormatedDropDown
    };
}

function mapDispatchToProps(dispatch){
    return {
        actions : bindActionCreators(courseActions , dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps) (ManageCoursePage);