import { useState } from "react";
import Header from "../../components/Header/Header";

const PxToRem = () => {
  const [px, setPx] = useState("16");
  const [rem, setRem] = useState("1");
  const base = 16;

  const handlePxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const pxValue = e.target.value;
    setPx(pxValue);

    const parsed = parseFloat(pxValue);
    if (!isNaN(parsed)) {
      setRem((parsed / base).toFixed(4));
    } else {
      setRem("");
    }
  };

  const handleRemChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const remValue = e.target.value;
    setRem(remValue);

    const parsed = parseFloat(remValue);
    if (!isNaN(parsed)) {
      setPx((parsed * base).toFixed(2));
    } else {
      setPx("");
    }
  };

  return (
    <>
      <Header />
      <div className="px-to-rem">
        <h1>Conversor de PX ⇄ REM</h1>

        <div className="converter">
          <div className="input-group">
            <label htmlFor="px">Pixels (px)</label>
            <input id="px" type="number" value={px} onChange={handlePxChange} />
          </div>

          <div className="input-group">
            <label htmlFor="rem">REM</label>
            <input
              id="rem"
              type="number"
              value={rem}
              onChange={handleRemChange}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PxToRem;
