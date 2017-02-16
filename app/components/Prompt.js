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
