/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const StyleOriginalRoundFalse1 = ({ color = "#FF0000", className }) => {
  return (
    <svg
      className={`style-original-round-false-1 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M23.5057 6.22932C23.2289 5.20132 22.4184 4.39078 21.3904 4.11401C19.5123 3.60001 11.9999 3.60001 11.9999 3.60001C11.9999 3.60001 4.48762 3.60001 2.60954 4.09424C1.60131 4.37101 0.771002 5.20132 0.494232 6.22932C0 8.1074 0 12.0019 0 12.0019C0 12.0019 0 15.9163 0.494232 17.7746C0.771002 18.8026 1.58154 19.6131 2.60954 19.8899C4.50739 20.4039 11.9999 20.4039 11.9999 20.4039C11.9999 20.4039 19.5123 20.4039 21.3904 19.9097C22.4184 19.6329 23.2289 18.8223 23.5057 17.7943C23.9999 15.9163 23.9999 12.0217 23.9999 12.0217C23.9999 12.0217 24.0197 8.1074 23.5057 6.22932Z"
        fill={color}
      />
      <path className="path" d="M9.60788 15.5999L15.855 12.0019L9.60788 8.40393V15.5999Z" fill="white" />
    </svg>
  );
};

StyleOriginalRoundFalse1.propTypes = {
  color: PropTypes.string,
};
