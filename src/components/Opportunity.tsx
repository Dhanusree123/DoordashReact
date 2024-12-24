type Props = {
  Images: string;
  opportunityHeading: string;
  opportunityParagraph: string;
  opportunityButton: string;
};
function Opportunity(props: Props) {
  const {
    Images,
    opportunityHeading,
    opportunityParagraph,
    opportunityButton,
  } = props;

  return (
    <>
      <div className="opportunity_c">
        <h1 className="helpingSection mt-5">
          Unlocking opportunity for <br /> Dashers and businesses
        </h1>
        <div className="mt-5 opportunity_c1">
          <div className="opp_card">
            <h1 className="helpingHead">{opportunityHeading}</h1>
            <p className="helpingPara">{opportunityParagraph}</p>
            <button className="helpingSectionButtton">
              {opportunityButton}
            </button>
          </div>
          <img src={Images} alt="image" className="opportunityImage" />
        </div>
      </div>
    </>
  );
}

export default Opportunity;
