import React,{Component} from "react";
class ListRow extends Component{
render(){
    let x={};
    if(this.props.checked===true){
        x={
            textDecoration:'line-through'
        }
    }
    return(
        <div>
            <label style={x}>
            <input type="checkbox" checked={this.props.checked} onChange={()=> this.props.handleCheckboxChange(this.props.id)}/>
            {this.props.content}
            </label>
        </div>
    )
}
}
export default ListRow