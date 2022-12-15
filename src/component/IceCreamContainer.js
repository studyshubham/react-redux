import React from 'react'
import { connect } from "react-redux";
import { buyIceCream } from "../redux";

function IceCreamContainer(props) {
  return (
    <div>
        <h2>Number of iceCream - {props.numOfCakes}</h2>
        <button onClick={props.buyIceCream}>Buy IceCream</button>
    </div>
  )
}

const mapStateToProps = state => {
  return{
    numOfCakes: state.numOfCakes
  }
}

const mapDispatchToProps = dispatch => {
  return{
    buyIceCream: () => dispatch(buyIceCream())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(IceCreamContainer)