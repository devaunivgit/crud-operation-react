import { listDetails } from "../mockjson/listdetails";
import en from "../locale/en.json";
import fr from "../locale/fr.json";
const lang = {
  en: en,
  fr: fr
};
// import * as API from "./api";
/**API.getAll()
API.getUniqueOne()
API.postData()
 */
const initalState = {
  details: listDetails,
  isEditAddmode: false,
  addButton: true,
  backButton: false,
  validated: false,
  editDetails: null,
  language: lang.en
};
const myReducer = (state = initalState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case "DELETE":
      return {
        ...newState,
        addButton: true,
        backButton: false,
        isEditAddmode: false,
        details: state.details.filter(el => el.id !== action.value)
      };
    case "LOCALE":
      return {
        ...newState,
        language: action.value
      };
    case "ADD":
      return {
        ...newState,
        addButton: false,
        backButton: true,
        isEditAddmode: true,
        editDetails: null
      };
    case "SAVE":
      return {
        ...newState,
        addButton: true,
        isEditAddmode: false,
        details: [...state.details, action.value]
      };
    case "UPDATE":
      const index = newState.details.findIndex(
        user => user.id === action.value.id
      );
      newState.details[index] = action.value;
      return {
        ...newState,
        addButton: true,
        isEditAddmode: false,
        details: newState.details
      };
    case "EDIT":
      return {
        ...newState,
        addButton: false,
        backButton: true,
        isEditAddmode: true,
        editDetails: state.details.filter(el => el.id === action.value)
      };
    case "FormValid":
      return {
        ...newState,
        validated: true
      };
    case "LIST":
      return {
        ...newState,
        addButton: true,
        backButton: false,
        isEditAddmode: false
      };
    default:
      return newState;
  }

  // return newState;
};

export default myReducer;
