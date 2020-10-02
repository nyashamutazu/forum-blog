import React, { useEffect, useState } from "react";

const reloadPage = () => {
  window.location.reload();
}

const Spinner = () => {
  let spinner = (
    <div className="Spinner">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );

  const [value, setValue] = useState(spinner);

  useEffect(() => {
    setTimeout(() => {
      setValue(<div className="Spinner__text">Failed<div className="Spinner__link" onClick={() => reloadPage()}>Reload Page?</div></div>);
    }, 3000);
  }, []);

  return <div className="Spinner__Container">{value}</div>;
};

export default Spinner;
