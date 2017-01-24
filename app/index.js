var React = require('react');
var reactDOM = require('react-dom');

var HelloWorld = React.createClass({
  render: function(){
     return(
      <div>HelloWorld</div>
     )
  }
});  

reactDOM.render(<HelloWorld />, document.getElementById('app')
);
