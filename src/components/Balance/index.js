import PropTypes from 'prop-types';

const Balance = ({balance}) => {
    return (
        <div>
            Current balance: {balance}
        </div>
    )
}

Balance.propTypes = {
    balance: PropTypes.number
}

export default Balance