var axios = require('axios');

var id = "YOUR_CLIENT_ID";
var sec = "YOUR_SECRET_ID";
var param = "?client_id=" + id + "&client_secret=" + sec;

function getUserInfo (username){
  return axios.get("https://api.github.com/users/"+ username + param)
  //this returns a promise
  }

var helpers = {
// loop over this players array, pass each getUserInfo, return to componentDidMount
  getPlayersInfo : function(players){
    return axios.all(players.map(function(username){
        return getUserInfo(username)
    //.all takes an array of promises, and when finished moves to .then
  })).then(function(info){
    return info.map(function(user){
      return user.data;
    })
  })
  }
};

module.exports = helpers;
