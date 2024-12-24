 
 function Section2(props){
    return(
        <>
        <div>
            <div className="delivery">
                <img src={props.images} alt={props.head} width={props.hwidth} height={props.hheight} />
                <div>
                    <h1>{props.head}</h1>
                    <p>{props.para}</p>
                    <button>{props.hbutton}</button>
                </div>
            </div>
        </div>
        </>
    );
 }

 export default Section2