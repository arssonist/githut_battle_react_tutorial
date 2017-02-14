var React = require('react');


function puke(object){
  return <text>{JSON.stringify(object, null, '')}</text>
}

//stateles functioal component
function ConfirmBattle(props){
  return (
    props.isLoading === true ? <div> Loading </div> : <div> Confirm Battle!: {puke(props)} </div>
  )
}

module.exports = ConfirmBattle;
