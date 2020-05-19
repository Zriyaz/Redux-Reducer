import React from "react"
import {connect} from "react-redux"
import {fetchPost} from "../actions"
class PostList extends React.Component{
  componentDidMount(){
    this.props.fetchPost()
  }
  render(){
    return(
      <div>
       <h1>User Post:</h1>
       </div>
    )
  }
}
export default connect(
  null,
  {fetchPost}
  )(PostList )
