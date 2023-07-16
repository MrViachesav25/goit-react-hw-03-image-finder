import PropTypes from 'prop-types';

const Button = ({ onClick }) => {
  return (
    <div className="Box">
      <button className='Button' type="button" onClick={() => onClick()}>Load more</button>
    </div>
  )
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default Button;