import axios from "axios"
import { ADD_COURS_FAIL, ADD_COURS_SUCCESS, DELETE_COURS_FAIL, DELETE_COURS_SUCCESS, GET_COURS_FAIL, GET_COURS_LOADING, GET_COURS_SUCCESS, GET_ONE_COURS_FAIL, GET_ONE_COURS_SUCCESS, UPDATE_ONE_COURS_FAIL, UPDATE_ONE_COURS_SUCCESS } from "../constants/coursTypes"

export const getAllCours = ()=> async dispatch=>{
    dispatch({type:GET_COURS_LOADING})
    try {
        const response=await axios.get('http://localhost:5000/cours/')
        dispatch({type: GET_COURS_SUCCESS, payload:response.data})
    } catch (error) {
        console.log(error)
        dispatch({type: GET_COURS_FAIL, payload: error})
    }

}

export const deleteCours = (id)=> async dispatch=>{
    try {
         const response=await axios.delete(`http://localhost:5000/cours/${id}`)
         dispatch({type:DELETE_COURS_SUCCESS})
         dispatch(getAllCours())
        } catch (error) {
            console.log(error);
            dispatch({type:DELETE_COURS_FAIL , payload:error})
         }

}

export const addCours= (newCours, navigate)=> async dispatch=>{
  console.log(newCours)
  const token=localStorage.getItem("token")
    try {
         const response=await axios.post("http://localhost:5000/cours/addCourse", newCours,{ headers: { Authorization: `Bearer ${token}` } })
         console.log(response)
         dispatch({type:ADD_COURS_SUCCESS})
         dispatch(getAllCours())
         navigate("/cours")
        } catch (error) {
            console.log(error);
            dispatch({type:ADD_COURS_FAIL , payload:error})
            alert(error.response.data)
         }
}

  export const editCours=(id,newCours,navigate) => async (dispatch) => {
    try {
      const response = await axios.put(
        `http://localhost:5000/cours/${id}`,newCours
      );
      dispatch({type:UPDATE_ONE_COURS_SUCCESS})
      dispatch(getAllCours())
      navigate("/cours")
    } catch (error) {
      console.log(error);
      dispatch({type:UPDATE_ONE_COURS_FAIL,payload:error})
    }
  };
  export const editCoursAdmin=(id,newCours,navigate) => async (dispatch) => {
    try {
      const response = await axios.put(
        `http://localhost:5000/cours/${id}`,newCours
      );
      dispatch({type:UPDATE_ONE_COURS_SUCCESS})
      dispatch(getAllCours())
      navigate("/coursG")
    } catch (error) {
      console.log(error);
      dispatch({type:UPDATE_ONE_COURS_FAIL,payload:error})
    }
  };
  export const getOneCours=(id) => async (dispatch) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/Cours/details/${id}`
      );
      dispatch({type:GET_ONE_COURS_SUCCESS,payload:response.data.oneCours})
    } catch (error) {
      console.log(error);
      dispatch({type:GET_ONE_COURS_FAIL,payload:error})
    }
  };

