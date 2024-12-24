 
 function Section2(props){
    return(
        <>
            <div className="section2">
            <div className={props.cname}> 
            <div className="delivery">
            <img src={props.images} alt={props.head} width={props.hwidth} height={props.hheight} />
            <div>
                <h1>{props.head}</h1>
                <p>{props.para}</p>
                <button>{props.hbutton}</button>
            </div>
            </div>



            <div className="delivery">
            <img src={props.image} alt={props.head} height={props.hheight} width={props.hwidth} />
            <div>
            <h1 className="card-heading">{props.head}</h1>
            <p className="card-para">{props.head}</p>
            <button>{props.hbutton}</button>
            </div>
            </div>
        </div>
        </div>
        </>
    );
 }

 export default Section2