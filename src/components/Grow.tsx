type Props = {
  Images: string;
  GrowHeading: string;
  GrowParagraph: string;
  GrowButton: string;
};
function Grow(props: Props) {
  const { Images, GrowHeading, GrowParagraph, GrowButton } = props;

  return (
    <>
      <div className="growSection p-5">
        <div className="d-flex justify-content-center mt-4 align-items-center opportunity_c1">
          <img src={Images} alt="Image" className="opportunityImage" />
          <div className="opp_card">
            <h1 className="helpingHead">{GrowHeading}</h1>
            <p className="helpingPara">{GrowParagraph}</p>
            <button className="helpingSectionButtton">{GrowButton}</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Grow;
