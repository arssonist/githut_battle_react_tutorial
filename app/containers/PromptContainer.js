// // onchange() - attaches to input to change state of input when typed
// // onSubmit()- attached to form to fire on submit of button Submit
//
//
// /////////BUSINESS LOGIC///////////////////////
// var React = require('react');
// // sets the transparentBg, within the styles object, as a method on the page route
// var transparentBg = require('../styles').transparentBg;
// var Prompt = require('../components/Prompt');
//
//
// var PromptContainer = React.createClass({
//   contextTypes: {
//     router: React.PropTypes.object.isRequired
//   },
//
//   getInitialState: function(){
//     return {
//       username: ''
//     }
//   },
//
// // CHANGE STATE FUNCTION/// this.setState is how to update state
//   handleUpdateUser: function (e){
//     this.setState({
//       username:e.target.value
//     })
//   },
// // e is event; target is place on page;value is tha actual thing tyed(magic!)
//
// // was onSubmit, changed to handleSubmit when passed down to Propmt, which takes the On-prefix
//   handleSubmitUser: function(e){
//     e.preventDefault()
//     var username = this.state.username;
//     this.setState({
//       username: ''
//     });
//
//     // depends what will happen depends on which route we are on
//     if (this.props.routeParams.playerOne){
//       this.context.router.push({
// // context comes from context type
//       // console.log(this.context)
//     pathname:'/battle',
//     query: {
//       playerOne: this.props.routeParams.playerOne,
//       playerTwo: this.state.username
//     }
//   })
//     } else  {
//     this.context.router.push('/playerTwo/' + this.state.username)
//       //player 2
//     }
//   },
//   /////////PRESENTATIONAL LOGIC///////////////////////
//
//   render: function (){
//     // console.log(this)
//     // Bootstrap styling
//       return (
//         <Prompt
//             onSubmitUser={this.handleSubmitUser}
//             onUpdateUser= {this.handleUpdateUser}
//             header={this.props.route.header}
//             username={this.state.user}
//           />
//     )
//   }
// });
//
// module.exports = PromptContainer;

var React = require('react');
var Prompt = require('../components/Prompt');

var PromptContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    return {
      username: ''
    }
  },
  handleSubmitUser: function (e) {
    e.preventDefault();
    var username = this.state.username;
    this.setState({
      username: ''
    });

    if (this.props.routeParams.playerOne) {
      this.context.router.push({
        pathname: '/battle',
        query: {
          playerOne: this.props.routeParams.playerOne,
          playerTwo: this.state.username,
        }
      })
    } else {
      this.context.router.push('/playerTwo/' + this.state.username)
    }
  },
  handleUpdateUser: function (event) {
    this.setState({
      username: event.target.value
    });
  },
  render: function () {
    return (
      <Prompt
        onSubmitUser={this.handleSubmitUser}
        onUpdateUser={this.handleUpdateUser}
        header={this.props.route.header}
        username={this.state.username} />
    )
  }
});

module.exports = PromptContainer;
