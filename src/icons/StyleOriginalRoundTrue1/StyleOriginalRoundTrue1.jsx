/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const StyleOriginalRoundTrue1 = ({ color = "#FF0000", className }) => {
  return (
    <svg
      className={`style-original-round-true-1 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect className="rect" fill={color} height="24" rx="12" width="24" />
      <path
        className="path"
        d="M18.9882 8.56471C18.8235 7.95294 18.3412 7.47059 17.7294 7.30588C16.6118 7 12.1412 7 12.1412 7C12.1412 7 7.67059 7 6.55294 7.29412C5.95294 7.45882 5.45882 7.95294 5.29412 8.56471C5 9.68235 5 12 5 12C5 12 5 14.3294 5.29412 15.4353C5.45882 16.0471 5.94118 16.5294 6.55294 16.6941C7.68235 17 12.1412 17 12.1412 17C12.1412 17 16.6118 17 17.7294 16.7059C18.3412 16.5412 18.8235 16.0588 18.9882 15.4471C19.2824 14.3294 19.2824 12.0118 19.2824 12.0118C19.2824 12.0118 19.2941 9.68235 18.9882 8.56471Z"
        fill="white"
      />
      <path className="path" d="M10.7176 14.1412L14.4352 12L10.7176 9.85883V14.1412Z" fill={color} />
    </svg>
  );
};

StyleOriginalRoundTrue1.propTypes = {
  color: PropTypes.string,
};
