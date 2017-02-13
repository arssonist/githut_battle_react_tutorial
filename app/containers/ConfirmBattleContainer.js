var React = require('react');
var ConfirmBattle = require("../components/ConfirmBattle");

var ConfirmBattleContainer = React.createClass({
// routing is needed for buttons; imported with=
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function() {
    console.log('getInitialState')
    return {
      isloading: false,
    players: []
  }
},
componentWillMount: function(){
  console.log('componentWillMount')
},
componentDidMount: function() {
  var query = this.props.location.query;
  console.log(query)
  console.log('componentDidMount')
},
componentWillReceiveProps:function(){
  console.log('componentWillReceiveProps')
},
componentWillUnMount: function(){
  console.log('componentWillUnMount')
},
  render: function () {
      return(
          <ConfirmBattle isLoading={this.state.isLoading}
          playersInfo={this.state.playersInfo}/>
      );
  }
})

module.exports = ConfirmBattleContainer;
