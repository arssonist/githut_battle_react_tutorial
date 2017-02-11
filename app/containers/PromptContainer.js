// onchange() - attaches to input to change state of input when typed
// onSubmit()- attached to form to fire on submit of button Submit

var React = require('react');
// sets the transparentBg, within the styles object, as a method on the page route
var transparentBg = require('../styles').transparentBg;

var PromptContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function(){
    return {
      username: ''
    }
  },

// CHANGE STATE FUNCTION/// this.setState is how to update state
  onUpdateUser: function (e){
    this.setState({
      username:e.target.value
    })
  },
// e is event; target is place on page;value is tha actual thing tyed(magic!)

  onSubmitUser: function(e){
    e.preventDefault()
    var username = this.state.username;
    this.setState({
      username: ''
    });

    // depends what will happen depends on which route we are on
    if (this.props.routeParams.playerOne){
      this.context.router.push({
// context comes from context type
      // console.log(this.context)
    pathname:'/battle',
    query: {
      playerOne: this.props.routeParams.playerOne,
      playerTwo: this.state.username
    }
  })
    } else  {
    this.context.router.push('/playerTwo/' + this.state.username)
      //player 2
    }
  },

  render: function (){
    // console.log(this)
    // Bootstrap styling
      return (
        <div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={transparentBg}>
    {/* add style from obje ct on style page */}
          {/* takes the header from the route object */}
          <h1>{this.props.route.header}</h1>
          <div className="col-sm-12">

{/* onSubmitUser is a custom function */}
            <form onSubmit={this.onSubmitUser}>
              <div className="form-group">
{/* input takes the state change from getInitialState and changes onChange*/}
                <input className="form-control" placeholder="Github Username"
    // onUpdateUser is a custom function
                  onChange={this.onUpdateUser}
                  value={this.state.username}
                  type="text" />
              </div>
              <div className="form-group col-sm-4 col-sm-offset-4">

                <button className="btn btn-block btn-success"
                  type="submit">
                    Continue
                  </button>
              </div>
            </form>
          </div>
        </div>

    )
  }
});

module.exports = PromptContainer;
