
function Header(){

    return(
        <>
        <div className="card-header">
            <div className="header">
                <div className="card-title">
                    <h2 className="myh2">DOORDASH</h2>
                </div>
                <div className="card-buttons">
                    <button className="button1">Sign In</button>
                    <button className="button2">Sign Up</button>
                </div>
            </div>
            <div className="card-center">
                <h1>Discover restaurants and more near you</h1>
                <input className="input-address" type="text" placeholder="Enter deliver address"/><br/>
                <button className="saved-address">Sign in for saved address</button>
            </div>
        </div>
        </>
    );
}

export default Header