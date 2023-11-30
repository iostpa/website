/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const StyleSolidRoundFalse1 = ({ color = "black", className }) => {
  return (
    <svg
      className={`style-solid-round-false-1 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M21.057 7.18078C21.0663 7.39198 21.0663 7.59358 21.0663 7.80478C21.0755 14.208 16.3711 21.6 7.76781 21.6C5.23036 21.6 2.73921 20.8416 0.599976 19.4208C0.970406 19.4688 1.34084 19.488 1.71127 19.488C3.81346 19.488 5.86009 18.7584 7.51777 17.4048C5.51744 17.3664 3.7579 16.0128 3.14669 14.0352C3.8505 14.1792 4.57284 14.1504 5.25814 13.9488C3.08186 13.5072 1.51679 11.52 1.50753 9.20639C1.50753 9.18719 1.50753 9.16799 1.50753 9.14879C2.15578 9.52319 2.88738 9.73439 3.62825 9.75359C1.58162 8.33278 0.942624 5.50077 2.18357 3.28317C4.56358 6.31678 8.06415 8.15038 11.824 8.35198C11.4443 6.67198 11.9629 4.90557 13.1761 3.71517C15.056 1.88156 18.0195 1.97756 19.7975 3.92637C20.844 3.71517 21.8534 3.31197 22.7702 2.74556C22.4183 3.86877 21.6867 4.81917 20.7144 5.42397C21.6404 5.30877 22.548 5.04957 23.4 4.66557C22.7702 5.64477 21.9738 6.48958 21.057 7.18078Z"
        fill={color}
      />
    </svg>
  );
};

StyleSolidRoundFalse1.propTypes = {
  color: PropTypes.string,
};
