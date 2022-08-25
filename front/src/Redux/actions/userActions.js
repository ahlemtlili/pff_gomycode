import axios from "axios";
import {
  DELETE_PARENT_FAIL,
  DELETE_PARENT_SUCCESS,
  DELETE_PUPIL_FAIL,
  DELETE_PUPIL_SUCCESS,
  DELETE_TEACHER_FAIL,
  DELETE_TEACHER_SUCCESS,
  GET_CURRENT_USER_FAIL,
  GET_CURRENT_USER_SUCCESS,
  GET_ELEVES_FAIL,
  GET_ELEVES_SUCCESS,
  GET_PARENTS_FAIL,
  GET_PARENTS_SUCCESS,
  GET_TEACHERS_FAIL,
  GET_TEACHERS_SUCCESS,
  LOGOUT,

  SIGNIN_USER_FAIL,
  SIGNIN_USER_SUCCESS,
  SIGNUP_CHILD_FAIL,
  SIGNUP_CHILD_SUCCESS,
  SIGNUP_USER_FAIL,
  SIGNUP_USER_SUCCESS,
} from "../constants/userTypes";

export const signupUser = (user, navigate) => async (dispatch) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/users/registeruser",
      user
    );
    dispatch({ type: SIGNUP_USER_SUCCESS, payload: response.data.newUser });
     navigate("/login")
} catch (error) {
    console.log(error);
    dispatch({ type: SIGNUP_USER_FAIL, payload: error });
  }
};
// signup child
export const signupChild = (user, navigate) => async (dispatch) => {
  try {
    const response = await axios.post("http://localhost:5000/users/registerChild",user,{ headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } });
    console.log("byeeeeeee")
    dispatch({ type: SIGNUP_CHILD_SUCCESS, payload: response.data.newUser });
   navigate("/pageParent");
} catch (error) {
    console.log(error);
    dispatch({ type: SIGNUP_CHILD_FAIL, payload: error });
  }
};
export const signin= (user, navigate) => async (dispatch) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/users/login",
      user
    );
    dispatch({ type: SIGNIN_USER_SUCCESS, payload:response.data });
    if(response.data.user.role ==="enseignant")
    navigate("/pageTeacher") 
    else if(response.data.user.role ==="parent" )
    navigate("/pageParent") 
    else
    navigate("/pageAdmin") 
    
  } catch (error) {
    console.log(error);
    dispatch({ type: SIGNIN_USER_FAIL, payload: error });
  }
};
export const getCurrentuser = () => async (dispatch) => {
  const token = localStorage.getItem("token");
  try {
    const response = await axios.get(
      "http://localhost:5000/users/currentUser",
      { headers: { Authorization: `Bearer ${token}` } }
    );
    dispatch({ type: GET_CURRENT_USER_SUCCESS, payload: response.data });
  } catch (error) {
    console.log(error);
    dispatch({ type: GET_CURRENT_USER_FAIL, payload: error });
  }
};
export const getAllEleves = () => async (dispatch) => {
  try {
    const response = await axios.get(
      "http://localhost:5000/users/eleve",
      
    );
    dispatch({ type: GET_ELEVES_SUCCESS, payload: response.data });
  } catch (error) {
    console.log(error);
    dispatch({ type: GET_ELEVES_FAIL, payload: error });
  }
};
// get all parents
export const getAllParents = () => async (dispatch) => {
  try {
    const response = await axios.get(
      "http://localhost:5000/users/parents",
      
    );
    dispatch({ type: GET_PARENTS_SUCCESS, payload: response.data });
  } catch (error) {
    console.log(error);
    dispatch({ type: GET_PARENTS_FAIL, payload: error });
  }
};
// get all teachers
export const getAllTeachers = () => async (dispatch) => {
  try {
    const response = await axios.get(
      "http://localhost:5000/users/teachers",
      
    );
    dispatch({ type: GET_TEACHERS_SUCCESS, payload: response.data });
  } catch (error) {
    console.log(error);
    dispatch({ type: GET_TEACHERS_FAIL, payload: error });
  }
};
export const logoutUser = (navigate) => {
  navigate("/");
  return { type: LOGOUT };
};

    // delete  parent action
    export const deleteParent = (id)=> async dispatch=>{
      try {
           const response=await axios.delete(`http://localhost:5000/users/parent/${id}`)
           dispatch({type:DELETE_PARENT_SUCCESS})
           dispatch(getAllParents())
          } catch (error) {
              console.log(error);
              dispatch({type:DELETE_PARENT_FAIL , payload:error})
           }
  
  }
  
    // delete  teacher action
    export const deleteTeacher = (id)=> async dispatch=>{
      try {
           const response=await axios.delete(`http://localhost:5000/users/enseignant/${id}`)
           dispatch({type:DELETE_TEACHER_SUCCESS})
           dispatch(getAllTeachers())
          } catch (error) {
              console.log(error);
              dispatch({type:DELETE_TEACHER_FAIL , payload:error})
           }
  
  }
    // delete  pupil action
    export const deletePupil = (id)=> async dispatch=>{
      try {
           const response=await axios.delete(`http://localhost:5000/users/eleve/${id}`)
           dispatch({type:DELETE_PUPIL_SUCCESS})
           dispatch(getAllEleves())

          } catch (error) {
              console.log(error);
              dispatch({type:DELETE_PUPIL_FAIL , payload:error})
           }
  
  }
