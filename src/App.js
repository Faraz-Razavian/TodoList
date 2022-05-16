import React,{Component} from 'react';
import {v1 as uuidv1 } from 'uuid'
import ListRow from "./ListRow";
class App extends Component{
  constructor(){
    super()
    this.state = {
      list: [],
      tempInput: ''
    }
  }
  handleSubmit=(event)=>{
    let newList={
      key:uuidv1(),
      content: this.state.tempInput,
      checked:false
    }
    let tempList=[]
    if(this.state.list){
      tempList=this.state.list
    }
    tempList.push(newList)
    this.setState({
      list:tempList,
      tempInput:''
    })
    event.preventDefault()
  }
  handleInputChange=(event)=>{
    this.setState({
      tempInput:event.target.value
    })
  }
  handleCheckboxUpdate=(key)=>{
    this.setState((prevstate)=>{
      let newList= prevstate.list.map((row)=>{
        if(row.key===key){
          row.checked=!row.checked;
        }
        return row
      })
      return {
        list:newList
      }
    })
  }
  render(){
    const list=this.state.list.map((row)=>{
      return(<ListRow id={row.key} key={row.key} checked={row.checked} content={row.content} handleCheckboxChange={this.handleCheckboxUpdate}/>)
    });
    return(
      <React.Fragment>
      <div className='list'>
        {list}
      </div>
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.tempInput} onChange={this.handleInputChange}/>
        <button type="submit">Insert</button>  
      </form>
      </React.Fragment>
    )
  }
}
export default App;