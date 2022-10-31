function SmallRegular(props) {
  return (
    <>
      <p className={`text-small-regular ${props.textStyles}`}>{props.text}</p>
    </>
  );
}

export default SmallRegular;
