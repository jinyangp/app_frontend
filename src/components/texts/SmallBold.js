function SmallBold(props) {
  return (
    <>
      <p className={`text-small-bold ${props.textStyles}`}>{props.text}</p>
    </>
  );
}

export default SmallBold;
