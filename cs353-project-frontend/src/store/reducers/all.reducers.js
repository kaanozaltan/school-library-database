import * as Actions from "../actions/actions.js";
const initialState = {
    bringAllUsers: [],
    libraryItems: [],
    myLibraryItems: [],
    lendItems: [],
    returnableItems: [],
    warnings: [],
    allCourses: [],
    myCourses: [],
    studentsForTheChoosenCourse: [],
    assignedLibraryItems: [],
    reports: [],
};

const all = function(state = initialState, action) {
    switch (action.type) {
        case Actions.BRING_ALL_USERS: {
            return {
                ...state,
                bringAllUsers: action.payload,
            };
        }
        case Actions.BRING_ALL_LIBRARY_ITEMS: {
            return {
                ...state,
                libraryItems: action.payload,
            };
        }
        case Actions.BRING_MY_ITEMS: {
            return {
                ...state,
                myLibraryItems: action.payload,
            };
        }
        case Actions.BRING_ALL_AVAILABLE_AND_HOLDED_ITEMS_FOR_LEND: {
            return {
                ...state,
                lendItems: action.payload,
            };
        }
        case Actions.BRING_ALL_RETURNABLE_ITEMS: {
            return {
                ...state,
                returnableItems: action.payload,
            };
        }
        case Actions.BRING_WARNINGS: {
            return {
                ...state,
                warnings: action.payload,
            };
        }
        case Actions.BRING_ALL_COURSES: {
            return {
                ...state,
                allCourses: action.payload,
            };
        }
        case Actions.BRING_MY_COURSES: {
            return {
                ...state,
                myCourses: action.payload,
            };
        }
        case Actions.BRING_STUDENTS_FOR_THE_CHOOSEN_COURSE: {
            return {
                ...state,
                studentsForTheChoosenCourse: action.payload,
            };
        }
        case Actions.BRING_ASSIGNED_LIBRARY_ITEMS: {
            return {
                ...state,
                assignedLibraryItems: action.payload,
            };
        }
        case Actions.BRING_REPORTS: {
            return {
                ...state,
                reports: action.payload,
            };
        }
        default: {
            return state;
        }
    }
};

export default all;
