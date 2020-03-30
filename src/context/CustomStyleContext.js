import React, { useContext, useState, useEffect } from "react";

const CustomStyleContext = React.createContext();
const { Provider } = CustomStyleContext;

const CustomStyle = ({
  children,
}) => {
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setScreenHeight(window.innerHeight);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Provider value={{ screenHeight }}>
      {children}
    </Provider>
  )
}

const useCustomStyleContext = () => useContext(CustomStyleContext);

export { CustomStyle, CustomStyleContext, useCustomStyleContext };