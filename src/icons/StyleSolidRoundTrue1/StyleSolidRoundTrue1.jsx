/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const StyleSolidRoundTrue1 = ({ color = "black", className }) => {
  return (
    <svg
      className={`style-solid-round-true-1 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect className="rect" fill={color} height="24" rx="12" width="24" />
      <path
        className="path"
        d="M9.80399 18.33C15.126 18.33 18.036 13.92 18.036 10.098C18.036 9.97201 18.036 9.84601 18.03 9.72601C18.594 9.31801 19.086 8.80801 19.476 8.22601C18.96 8.45401 18.402 8.61001 17.814 8.68201C18.414 8.32201 18.87 7.75801 19.086 7.08001C18.528 7.41001 17.91 7.65001 17.25 7.78201C16.722 7.21801 15.972 6.87001 15.138 6.87001C13.542 6.87001 12.246 8.16601 12.246 9.76201C12.246 9.99001 12.27 10.212 12.324 10.422C9.91799 10.302 7.78799 9.15001 6.35999 7.39801C6.11399 7.82401 5.96999 8.32201 5.96999 8.85001C5.96999 9.85201 6.47999 10.74 7.25999 11.256C6.78599 11.244 6.34199 11.112 5.95199 10.896C5.95199 10.908 5.95199 10.92 5.95199 10.932C5.95199 12.336 6.94799 13.5 8.27399 13.77C8.03399 13.836 7.77599 13.872 7.51199 13.872C7.32599 13.872 7.14599 13.854 6.96599 13.818C7.33199 14.97 8.39999 15.804 9.66599 15.828C8.67599 16.602 7.42799 17.064 6.07199 17.064C5.83799 17.064 5.60999 17.052 5.38199 17.022C6.64799 17.85 8.17199 18.33 9.80399 18.33Z"
        fill="white"
      />
    </svg>
  );
};

StyleSolidRoundTrue1.propTypes = {
  color: PropTypes.string,
};
