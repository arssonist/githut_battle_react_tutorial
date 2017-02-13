var React = require('react');
var PropTypes = React.PropTypes;
var transparentBg = require('../styles').transparentBg;

// functional stateless component
  // this is not needed- only params here needed
  function Prompt (props) {
    return (
      <div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={transparentBg}>
        <h1>{props.header}</h1>
        <div className="col-sm-12">
          <form onSubmit={props.onSubmitUser}>
            <div className="form-group">
              <input
                className="form-control"
                onChange={props.onUpdateUser}
                placeholder="Github Username"
                type="text"
                value={props.username} />
            </div>
            <div className="form-group col-sm-4 col-sm-offset-4">
              <button
                className="btn btn-block btn-success"
                type="submit">
                  Continue
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }

// this set the isrequried and element types to be bound to the function
Prompt.propTypes = {
    onSubmitUser: PropTypes.func.isRequired,
    onUpdateUser: PropTypes.func.isRequired,
    header: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired
}
module.exports = Prompt;

//   var React = require('react');
// var Prompt = require('../components/Prompt');
//
// var PromptContainer = React.createClass({
//   contextTypes: {
//     router: React.PropTypes.object.isRequired
//   },
//   getInitialState: function () {
//     return {
//       username: ''
//     }
//   },
//   handleSubmitUser: function (e) {
//     e.preventDefault();
//     var username = this.state.username;
//     this.setState({
//       username: ''
//     });
//
//     if (this.props.routeParams.playerOne) {
//       this.context.router.push({
//         pathname: '/battle',
//         query: {
//           playerOne: this.props.routeParams.playerOne,
//           playerTwo: this.state.username,
//         }
//       })
//     } else {
//       this.context.router.push('/playerTwo/' + this.state.username)
//     }
//   },
//   handleUpdateUser: function (event) {
//     this.setState({
//       username: event.target.value
//     });
//   },
//   render: function () {
//     return (
//       <Prompt
//         onSubmitUser={this.handleSubmitUser}
//         onUpdateUser={this.handleUpdateUser}
//         header={this.props.route.header}
//         username={this.state.username} />
//     )
//   }
// });
//
// module.exports = PromptContainer;
