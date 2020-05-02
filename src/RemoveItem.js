import React from "react";
import PropTypes from "prop-types";

function removeItem(props) {
  return (
    <button onClick={props.deleteLastItem} disabled={props.noItemsFound}>
      Delete Last Item
    </button>
  );
}

removeItem.propTypes = {
  deleteLastItem: PropTypes.func.isRequired,
  noItemsFound: PropTypes.bool.isRequired,
};

export default removeItem;
