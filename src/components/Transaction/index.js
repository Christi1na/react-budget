import PropTypes from "prop-types"
import { Wrapper } from "./styles"

const Transaction = ({transaction: {value = 0, date, comment}}) => {
    return (
        <Wrapper value={value}>
            <div>Date: {date}</div>
            <div>Transaction: {value.toFixed(2)}</div>
            <p>{comment ? `Comment: ${comment}` : "No comment"}</p>
        </Wrapper>
    )
}

Transaction.propTypes = {
    transaction: PropTypes.shape({
        label: PropTypes.string,
        value: PropTypes.number,
    })
}

Transaction.defaultProps = {
    transaction: [],
    comment: "",
    value: 0,
}

export default Transaction