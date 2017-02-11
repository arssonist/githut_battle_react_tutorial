var React = require('react');
var PropTypes = React.PropTypes;
var transparentBg = require('../styles').transparentBg;

// functional stateless component
// function Prompt()

var Prompt = React.createClass({
// this set the isrequried and element types to be bound to the function
  PropTypes:{
    header:PropTypes.string.isRequired,
    onUpdateUser: PropTypes.func.isRequired,
    onSubmitUser: PropTypes.func.isRequired,
    username: PropTypes.string.isRequired
  },
render: function (){
    return (
  //     <div cslassName="jumbotron col-sm-6 col-sm-offset-3 text-center" style={transparentBg}>
  // {/* add style from obje ct on style page */}
  //       {/* takes the header from the route object */}
  //       <h1>{this.header}</h1>
  //       <div className="col-sm-12">
  //
  // {/* onSubmitUser is a custom function */}
  //         <form onSubmit={this.props.onSubmitUser}>
  //           <div className="form-group">
  // {/* input takes the state change from getInitialState and changes onChange*/}
  //             <input className="form-control" placeholder="Github Username"
  // // onUpdateUser is a custom function
  //               onChange={this.props.onUpdateUser}
  //               value={this.props.username}
  //               type="text" />
  //           </div>
  //           <div className="form-group col-sm-4 col-sm-offset-4">
  //
  //             <button className="btn btn-block btn-success"
  //               type="submit">
  //                 Continue
  //               </button>
  //           </div>
  //         </form>
  //       </div>
  //     </div>
  }
})
module.exports = Prompt;
