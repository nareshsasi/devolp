import React from 'react';
import ReactDOM from 'react-dom';

class Learnreactprops extends React.Component
{
  constructor()
  {
    super();
    this.state={value:"welcome to 10decoder"}
  }
  componentWillMount()
  {
    alert("welcome on board");
  }

  render()

{
  return <div> 
    <h1> {this.state.value} </h1>
    <br/>
    <button type="button" onClick={this.changevalue}>change color</button>
    </div>
   }
   changevalue = () =>
   {
     this.setState({value:"we grow together"});
   }
   componentDidMount()
   {
     setTimeout(() =>{
        this.setState({value:"have good future"})},5000)
   }
   componentWillUpdate()
   {
     alert("welcome on our team");
   }
componentDidUpdate()
{
  document.getElementById("mydiv").innerHTML="new member is added"+this.state.value;
}

}
ReactDOM.render(<Learnreactprops />,document.getElementById('root'));  