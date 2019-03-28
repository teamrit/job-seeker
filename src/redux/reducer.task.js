import {
  SELECT_AREA_OF_STUDY,
  SELECT_SKILLS,
  SELECT_TIMINGS,
  SELECT_LOOKING_FOR,
  SELECT_SCHOOL,
  SELECT_TERM_LENGTH
} from "./string.constants";
import { toggleOptionInList } from "../helper.functions";

const initialState = {
  tasks: [],
  criterias: {
    areaOfStudy: "",
    skills: [],
    timings: [],
    lookingFor: [],
    termLength: ""
  }
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SELECT_AREA_OF_STUDY: {
      return {
        ...state,
        criterias: { ...state.criterias, areaOfStudy: action.payload }
      };
    }
    case SELECT_SKILLS: {
      const { skills } = state.criterias;
      return {
        ...state,
        criterias: {
          ...state.criterias,
          skills: toggleOptionInList(skills, action.payload)
        }
      };
    }
    case SELECT_TIMINGS: {
      const { timings } = state.criterias;
      return {
        ...state,
        criterias: {
          ...state.criterias,
          timings: toggleOptionInList(timings, action.payload)
        }
      };
    }
    case SELECT_LOOKING_FOR: {
      const { lookingFor } = state.criterias;
      return {
        ...state,
        criterias: {
          ...state.criterias,
          lookingFor: toggleOptionInList(lookingFor, action.payload)
        }
      };
    }
    case SELECT_SCHOOL: {
      return {
        ...state,
        criterias: { ...state.criterias, school: action.payload }
      };
    }
    case SELECT_TERM_LENGTH: {
      return {
        ...state,
        criterias: { ...state.criterias, termLength: action.payload }
      };
    }
    default: {
      return state;
    }
  }
}
