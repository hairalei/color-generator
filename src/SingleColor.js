import React, { useState, useEffect } from "react";

const SingleColor = ({ color, index }) => {
  const [alert, setAlert] = useState(false);
  const { rgb, weight, hex } = color;
  console.log(index);

  const bgC = rgb.join(",");

  const handleCopyHex = () => {
    setAlert(true);
    navigator.clipboard.writeText(`#${hex}`);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [alert]);

  return (
    <article
      onClick={handleCopyHex}
      className={`color ${index > 10 && "color-light"}`}
      style={{ backgroundColor: `rgb(${bgC})` }}
    >
      <div className="color-percent">
        <p className="percent-value">{weight}%</p>
        <p className="color-value">{`#${hex}`}</p>
        {alert && (
          <p className={`alert ${index > 10 && "alert-light"}`}>
            Copied to clipboard
          </p>
        )}
      </div>
    </article>
  );
};

export default SingleColor;
