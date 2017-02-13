// Home.js - actaully means home- route is congiured to be the IndexRoute
// the buttong redirects to the using RR link


// var React = require('react');
// var transparentBg = require('../styles').transparentBg;
// var ReactRouter = require('react-router');
// var Link = ReactRouter.Link
//
//
//
//
// var Home = React.createClass({
//   render: function(){
//     return (
//       <div className='jumbotron col-sm-12 text-center' style={transparentBg}>
//         <h1>Github Battle</h1>
//           <p className='lead'>some fancy motto</p>
// {/* Link created at top can be used as component now */}
//           <Link to='/playerOne'>
//
//
//             <button type='button' className='btn btn-lg btn-success'>
//                Get Started
//             </button>
//
//           </Link>
//       </div>
//     )
//   }
// });
//
// module.exports = Home;


var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link
var transparentBg = require('../styles').transparentBg;

function Home () {
  return (
    <div className="jumbotron col-sm-12 text-center" style={transparentBg}>
      <h1>Github Battle</h1>
      <p className='lead'>What even is a jQuery?</p>
      <Link to='/playerOne'>
        <button type='button' className='btn btn-lg btn-success'>Get Started</button>
      </Link>
    </div>
  )
}

module.exports = Home;
