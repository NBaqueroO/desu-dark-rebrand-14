import React, { useEffect, useState } from "react";
import "./Loader.css";

interface LoaderProps {
  onFinish?: () => void;
}

const Loader: React.FC<LoaderProps> = ({ onFinish }) => {
  const [showSecond, setShowSecond] = useState(false);
  const [visible, setVisible] = useState(true);
  const [exit, setExit] = useState(false);

  useEffect(() => {
    setShowSecond(false);
    setVisible(true);
    setExit(false);
    const timer1 = setTimeout(() => setShowSecond(true), 2000);
    const timer2 = setTimeout(() => {
      setVisible(false);
      setExit(true);
      if (onFinish) onFinish();
    }, 4000);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onFinish]);

  const loaderClass = [
    "loader",
    !visible ? "no-visible" : "",
    !visible && exit ? "exit" : ""
  ].filter(Boolean).join(" ");

  return (
    <div className={loaderClass}>
      <div className="logo-load">
        <div className={`gradient first${!showSecond && visible ? " active" : ""}`}>Agencia de Mercadeo</div>
        <div className={`gradient second${showSecond && visible ? " active" : ""}`}>Ventas &amp; B2B</div>
      </div>
    </div>
  );
};

export default Loader;
/**Texto viejo
 *         <div className={`gradient first${!showSecond && visible ? " active" : ""}`}>DE SU FUTURO</div>
        <div className={`gradient second${showSecond && visible ? " active" : ""}`}>PLANEACIÓN FINANCIERA &amp; MARKETING</div>
 */