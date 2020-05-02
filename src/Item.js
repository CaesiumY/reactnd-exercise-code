import React from "react";
import PropTypes from "prop-types";

function Item(props) {
  return <li>{props.item}</li>;
}

Item.propTypes = {
  item: PropTypes.string.isRequired,
};

export default Item;
