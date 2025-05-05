const BlurEffect = ({ color = "rgba(0, 0, 0, 0.4)", className = "" }) => {
  return <div className={` ${className}`} style={{ backgroundColor: color }} />;
};

export default BlurEffect;
