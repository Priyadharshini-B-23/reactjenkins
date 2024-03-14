

import React from 'react';

// function App() {
//   return (
//     // <div>
//     //   <h1 data-testid="MyHeading">welcome to JEST</h1>
//     //   <br></br>
//     //   <h1 data-testid="MyBold" >Hello world</h1>
//     // </div>
//     <div>

//     </div>
//   );
// }

// export default App;

class App extends React.Component{

constructor(props){
  super(props);
  this.state={Num1 : '',Num2 : '' ,Result : ''};
}

Add=()=>{
  var n1=parseInt(this.state.Num1);
  var n2=parseInt(this.state.Num2);
  var sum=n1+n2;
  this.setState({Result : sum});
}

  render(){
    return(
       <div>
          <h1 data-testid="Heading" >Addition of two Numbers</h1>
          <br></br>
          <label data-testid="Label1" >Enter NO 1</label><input type='number' data-testid="TextBox1" value={this.state.Num1} onChange={(e) => {this.setState({Num1 : e.target.value})}} />
           <br></br>
           <label  data-testid="Label2">Enter NO 2</label><input type='number'  data-testid="TextBox2" value={this.state.Num2}  onChange={(e) => {this.setState({Num2 : e.target.value})}}  />
           <br></br>
           <input type='submit'  data-testid="TextBox3" value='Addition'  onClick={this.Add} />
           <br></br>
           <b data-testid="Result" >Sum : {this.state.Result}</b>
       </div>
    );
  }
}

export default App;
