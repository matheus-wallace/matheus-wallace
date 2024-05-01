const Icon = ({ path, alt }) => {
  console.log(path, alt);
  return <img src={path} alt={alt} />;
};

export default Icon;
