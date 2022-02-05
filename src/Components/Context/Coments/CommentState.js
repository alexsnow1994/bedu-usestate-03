import React, { useReducer } from 'react';
import axiosClient from '../../../config/axios';
import CommentContext from './CommentContext';
import CommentReducer from './CommentReducer';


const CommentState = (props)=> {
  const initialState = {
    comments : []
  }
  const [globalState, dispatch] = useReducer (CommentReducer, initialState);

  const getAllComments = async ()=> {
    const res = await axiosClient.get("/api/comments/readall")
    console.log(res);
    dispatch({
      type: "GET_ALL_COMMENTS",
      payload: res.data.data
    });
  };
  const createComment = async (dataForm) => {
    
    const res = await axiosClient.post("/api/comments/create", dataForm)
    
    getAllComments()
  }

  return (
    <CommentContext.Provider  value={{ 
      comments: globalState.comments,
      getAllComments,
      createComment
    }}>
      {props.children}
    </CommentContext.Provider>
  )
}

export default CommentState