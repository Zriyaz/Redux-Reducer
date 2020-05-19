import jsonPlaceholder from "../apis/jsonPlaceholder"
export const fetchPost = ()=>{
  return function(){
    const promise  =  jsonPlaceholder.get('/posts')
  return{
    type:'FETCH_POST',
    payload:promise
  }
  }
}

