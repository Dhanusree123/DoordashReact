type Props = {
  images: string;
  helpingHeading: string;
  helpingParagraph: string;
  helpingButton: string;
};
function TodoGifts(props: Props) {
  const { images, helpingHeading, helpingParagraph, helpingButton } = props;

  return (
    <>
      <div className="helpingCard">
        <img src={images} alt={helpingHeading} className="helpingCardImg" />
        <h1 className="helpingHead">{helpingHeading}</h1>
        <p className="helpingPara">{helpingParagraph}</p>
        <button className="helpingSectionButtton">{helpingButton}</button>
      </div>
    </>
  );
}

export default TodoGifts;
