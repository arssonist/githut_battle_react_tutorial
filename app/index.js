var USER_DATA = {
  name:'Chris Del',
  username:'arssonist',
  pic:'http://www.johndoe.pro/img/John_Doe.jpg'
}

var React = require('react');
var ReactDOM = require('react-dom');

    var ProfilePic= React.createClass({
      render: function(){
         return(
          <img src={this.props.ImageUrl} style={{height:100, width:100}}/>
         )
      }
    });

    var Link = React.createClass({
      changeURL: function(){
        // built in DOM method
      window.location.replace(this.props.href)
    },
      render: function(){
        return(
          <span style={{color:'blue', cursor:'  pointer'}} onClick={this.changeURL}>
          {this.props.children}
          </span>
        )
      }
    });

    var ProfileLink = React.createClass({
      render: function(){
         return(
           <div>
         <Link href={'https://www.github.com/' +  this.props.username}>
           {this.props.username}
        </Link>
       </div>
         )
      }
    });
    var ProfileName = React.createClass({
      render: function(){
        return <div>{this.props.name}</div>
      }
    });
  var Avatar = React.createClass({
    render: function(){
       return(
        <div>
          <ProfilePic ImageUrl={this.props.user.pic}/>
          <ProfileName name={this.props.user.name}/>
          <ProfileLink username={this.props.user.username}/>
        </div>
       )
    }
  });

ReactDOM.render(<Avatar user={USER_DATA} />, document.getElementById('app')
);
