const container = {
    width: '100%',
}
const logoStyle = {
    width: '200px',
}

const navLinkStyle = {
    color: 'white',

}

const navStyle = {
    backgroundColor: '#0075B8',
}

const headerTextStyle = {
    fontStyle: 'bold',
    textAlign: 'center',
}

const formContainer = {
    width: '400px',
    marginRight: 'auto',
    marginLeft: 'auto',
    height: '400px',
    background: 'teal',
}

const progressBarLi = {
    listStyleType: 'none',
    float: 'left',
    width: '33.33%',
    position: 'relative',

}

class App extends React.Component {
    render() {
        return (
            <div className="container-fluid" style={container}>
                <div className={"row"}>
                    <div className={"col-2"}></div>
                    <div className={"col-8"}>
                        <Form/>
                    </div>
                    <div className={"col-2"}></div>
                </div>
            </div>
        )
    }
}

class Nav extends React.Component {
    constructor() {
        super();
        this.state = {hover: false};

    }

    mouseOver() {
        console.log("hover over");
        this.setState({hover: true});

    }

    render() {
        return (<nav className={"navbar"} style={navStyle}>
                <a className={"navbar-brand"} href="#">
                    <img src="../img/Allstate-Emblem.jpg" style={logoStyle}></img>
                </a>
                <ul className={"nav justify-content-end"} style={navStyle}>

                    <li className={"nav-item"}>
                        <a onMouseOver={this.mouseOver} style={navLinkStyle} className="nav-link active" href="#">|
                            About Allstate |</a>
                    </li>
                    <li className={"nav-item"}>
                        <a style={navLinkStyle} className="nav-link" href="#">| Find Us |</a>
                    </li>
                </ul>
            </nav>
        )
    }
}

class Form extends React.Component {
    render() {
        return (
            <section className={"jumbotron text-center"}>
                <div className={formContainer}>
                    <form>
                        <div className={"row"}>
                            <div className={"col-sm-12 col-md-8"}>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Full Name</label>
                                    <input type="text" className="form-control" id="exampleInputEmail1"
                                           aria-describedby="emailHelp"
                                           placeholder="As Appears on Card"></input>
                                    <small id="emailHelp" className="form-text text-muted">Enter your full name as it
                                        appears on the card.
                                    </small>
                                </div>
                            </div>
                            <div className={"col-4"}></div>
                            <div className={"col-4"}></div>
                        </div>
                        <div className={"row"}>
                            <div className={"col-sm-12 col-md-4"}>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlSelect1">Card Type</label>
                                    <select className="form-control" id="exampleFormControlSelect1">
                                        <option>American Express</option>
                                        <option>Visa</option>
                                        <option>Mastercard</option>
                                        <option>Diners Club</option>
                                        <option>Discover</option>
                                        <option>JCB</option>
                                        <option>UATP</option>
                                    </select>
                                </div>
                            </div>
                            <div className={"col-sm-12 col-md-4"}></div>
                            <div className={"col-sm-12 col-md-4"}></div>
                        </div>
                        <div className={"row"}>
                            <div className={"col-sm-12 col-md-8"}>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Card Number</label>
                                    <input type="number" className="form-control" id="exampleInputEmail1"
                                           aria-describedby="emailHelp"
                                           placeholder="Enter 16-digit card number"></input>
                                    <small id="emailHelp" className="form-text text-muted">We'll never share your card
                                        details with anyone else.
                                    </small>
                                </div>
                            </div>
                            <div className={"col-sm-12 col-md-4"}>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">CVV</label>
                                    <input type="number" className="form-control" id="exampleInputEmail1"
                                           aria-describedby="emailHelp"
                                           placeholder="Enter 3-digit CVV"></input>
                                    <small id="emailHelp" className="form-text text-muted">We'll never share your card
                                        details with anyone else.
                                    </small>
                                </div>
                            </div>
                        </div>
                        <div className={"row"}>
                            <div className={"col-4"}>
                                <div className="form-group">
                                    <label htmlFor="sortCodeInput">Sort-Code</label>
                                    <input type="number" className="form-control" id="exampleInputEmail1"
                                           aria-describedby="emailHelp"
                                           placeholder="Enter your 6-digit sort code"></input>
                                    <small id="emailHelp" className="form-text text-muted">We'll never share your card
                                        details with anyone else.
                                    </small>
                                </div>
                            </div>
                            <div className={"col-4"}>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Account Number</label>
                                    <input type="number" className="form-control" id="exampleInputEmail1"
                                           aria-describedby="emailHelp"
                                           placeholder="Enter 16-digit card number"></input>
                                    <small id="emailHelp" className="form-text text-muted">We'll never share your card
                                        details with anyone else.
                                    </small>
                                </div>
                            </div>
                            <div className={"col-4"}></div>
                        </div>
                        <div className={"row"}>
                            <div className={"col-sm-12 col-md-3"}></div>
                            <div className={"col-sm-12 col-md-6"}>
                                <input type={"submit"} className={"btn btn-block btn-success"}></input>
                            </div>
                            <div className={"col-sm-12 col-md-3"}></div>
                        </div>
                    </form>
                </div>
            </section>
        )
    }
}

ReactDOM.render(<Nav/>, document.getElementById('contentgoeshere'));
ReactDOM.render(<App course="ReactJS"/>, document.getElementById('contentgoeshere2'));

