import PropTypes from 'prop-types';

const Name = ({ searchValue, totalHits }) => {
  return (
    <div className="Box">
      <h1 className="Name"> {searchValue}
        <sup style={{ fontSize: "initial" }}> {totalHits} img</sup>
      </h1>
    </div>
  )
}

Name.propTypes = {
  searchValue: PropTypes.string.isRequired,
  totalHits: PropTypes.number.isRequired,
}

export default Name;