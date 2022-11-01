function NormalBold(props) {
  return (
    <>
      <p className={`text-normal-bold ${props.textStyles}`}>{props.text}</p>
    </>
  );
}

export default NormalBold;
