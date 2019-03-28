import { connect } from "react-redux";
import {
  SELECT_AREA_OF_STUDY,
  SELECT_SKILLS,
  SELECT_TIMINGS,
  SELECT_LOOKING_FOR,
  SELECT_SCHOOL,
  SELECT_TERM_LENGTH
} from "./redux/string.constants";

export const connectToJobStore = WrappedComponent => {
  function mapDispatchToProps(dispatch) {
    return {
      selectAreaOfStudy: area => {
        dispatch({ type: SELECT_AREA_OF_STUDY, payload: area });
      },
      selectSkills: skill => {
        dispatch({ type: SELECT_SKILLS, payload: skill });
      },
      selectTimings: skill => {
        dispatch({ type: SELECT_TIMINGS, payload: skill });
      },
      selectLookingFor: skill => {
        dispatch({ type: SELECT_LOOKING_FOR, payload: skill });
      },
      selectSchool: school => {
        dispatch({ type: SELECT_SCHOOL, payload: school });
      },
      selectTermLength: school => {
        dispatch({ type: SELECT_TERM_LENGTH, payload: school });
      }
    };
  }
  function mapStateToProps(state) {
    return {
      areaOfStudy: state.task.criterias.areaOfStudy,
      skills: state.task.criterias.skills,
      timings: state.task.criterias.timings,
      lookingFor: state.task.criterias.lookingFor,
      school: state.task.criterias.school,
      termLength: state.task.criterias.termLength,
      statuses: state.task.statuses
    };
  }
  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(WrappedComponent);
};
