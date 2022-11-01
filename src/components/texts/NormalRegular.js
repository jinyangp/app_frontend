function NormalRegular(props) {
  return (
    <>
      <p className={`text-normal-regular ${props.textStyles}`}>{props.text}</p>
    </>
  );
}

export default NormalRegular;
