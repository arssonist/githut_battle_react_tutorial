var React = require('react');

//stateles functioal component
function ConfirmBattle(props){
  return (
    props.isLoading === true ? <p> Loading </p> : <p> Confirm Battle! </p>
  )
}

module.exports = ConfirmBattle;
