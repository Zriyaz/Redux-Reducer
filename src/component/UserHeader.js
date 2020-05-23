import React,{Component} from "react"
import {connect} from "react-redux"


class UserHeader extends Component{
  
  render(){
    const user=this.props.users.find(user=>user.id===this.props.userId)
    if(!user){
      return null
    }
    
    return <div className="header">
    <h3>User name : {user.name}</h3></div>
  }
}
const mapStateToProps=(state)=>{
  return {users:state.users}
}
export default connect(
  mapStateToProps, 
)(UserHeader)