import _ from "lodash"
import jsonPlaceholder from "../apis/jsonPlaceholder"

export const fetchPostAndUser = () => async (dispatch,getState) => {
  await dispatch(fetchPost())
/*const userId = _.uniq(_.map(getState().posts,'userId'))
    userId.forEach(id=> dispatch(fetchUser(id)))*/

    _.chain(getState().posts)
    .map('userId')
    .uniq()
    .forEach(id=>dispatch(fetchUser(id)))
    .value()

}



export const fetchPost=()=> async dispatch=>{
   const response= await jsonPlaceholder.get('/posts')
    dispatch({type:'FETCH_POST',payload:response.data})   
  }


export const fetchUser=(id)=> async dispatch=> {
   const response= await jsonPlaceholder.get(`/users/${id}`)
  dispatch({type:'FETCH_USER',payload:response.data})
 }

/*export const fetchUser=(id)=> dispatch=> _fetchUser(id , dispatch)

 const _fetchUser = _.memoize(async(id,dispatch)=>{
   const response= await jsonPlaceholder.get(`/users/${id}`)
  dispatch({type:'FETCH_USER',payload:response.data})
 })*/