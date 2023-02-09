// import React from "react"
import Transaction from "../Transaction"
import PropTypes from "prop-types"


const Transactions = ({transactions}) => {
    if (transactions.length > 0) {
        return (
            transactions.map((transaction) => {
            return ( 
                <Transaction key={transaction.id} transaction={transaction}/>
            )
        }) 
        )
       
       
    }
    
}

Transactions.propTypes = {
    transactions: PropTypes.array
}

export default Transactions