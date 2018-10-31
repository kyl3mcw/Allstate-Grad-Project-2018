const container = {
    width: '100%',
}
const logoStyle = {
    width: '200px',
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
                <Nav course={this.props.course}/>
                <div className={"container"}>
                    <div className={"row"}>
                        <ProgressBar/>
                    </div>
                </div>
                <div className={"row"}>
                    <div className={"col-12"}>
                        <HeaderMessage/>
                    </div>
                </div>
                <div className={"row"}>
                    <div className={"col-2"}></div>
                    <div className={"col-8"}>
                        <Form/>
                    </div>
                    <div className={"col-2"}></div>
                </div>
                <Footer/>
            </div>
        )
    }
}

class Nav extends React.Component {
    render() {
        return (<ul className={"nav navbar navbar-expand-lg"} style={navStyle}>
                <a className={"navbar-brand"} href="#">
                    <img src="../img/Allstate-Emblem.jpg" style={logoStyle}></img>
                </a>
                <li className="nav-item">
                    <a className="nav-link active" href="#">Active</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" href="#">Disabled</a>
                </li>
            </ul>
        )
    }
}

class ProgressBar extends React.Component {
    render() {
        return (
            <ul style={progressBarLi}>
                <li className={"active"}>Step 1</li>
                <li>Step 2</li>
                <li>Step 3</li>
            </ul>
        )
    }
}

class HeaderMessage extends React.Component {
    render() {
        return (
            <div className="row">
                <div className={"col-2"}></div>
                <div className={"col-8"}>
                    <hr></hr>
                    <h1 className={headerTextStyle}>Card Details Entry Template</h1>
                    <hr></hr>
                </div>
                <div className={"col-2"}></div>
            </div>

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
                            <div className={"col-sm-12 col-md-2"}></div>
                            <div className={"col-sm-12 col-md-2"}></div>
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
                            <div className={"col-4"}>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Full Name</label>
                                    <input type="text" className="form-control" id="exampleInputEmail1"
                                           aria-describedby="emailHelp"
                                           placeholder="Enter 16-digit card number"></input>
                                    <small id="emailHelp" className="form-text text-muted">Enter your full name as it
                                        appears on the card.
                                    </small>
                                </div>
                            </div>
                            <div className={"col-4"}>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">CVV</label>
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
                            <div className={"col-4"}>
                                <input type={"submit"} className={"btn btn-block btn-success"}></input>
                            </div>
                            <div className={"col-4"}></div>
                            <div className={"col-4"}></div>
                        </div>
                    </form>
                </div>
            </section>
        )
    }
}

class Footer extends React.Component {
    render() {
        const pAlign = {
            textAlign: 'center',
        }
        return (
            <footer className={"text-muted"}>
                <div className={"container"}>
                    <p style={pAlign}><i className="far fa-copyright"></i> 2018 Allstate Insurance Company. All rights
                        reserved.</p>
                    <h5 style={pAlign}>Connect With Us</h5>
                    <hr></hr>
                    <div className={"row"}>
                        <div className={"col-3"}></div>
                        <div className={"col-1"}>
                            <a href={"https://www.facebook.com/Allstate/"} target="_blank">
                                <i className="fab fa-facebook-square fa-2x"></i>
                            </a>
                        </div>
                        <div className={"col-1"}>
                            <a href={"https://www.instagram.com/Allstate/"} target="_blank">
                                <i className="fab fa-instagram fa-2x"></i>
                            </a>
                        </div>
                        <div className={"col-1"}>
                            <a href={"https://www.linkedin.com/company/Allstate/"} target="_blank">
                                <i className="fab fa-linkedin-in fa-2x"></i>
                            </a>
                        </div>
                        <div className={"col-1"}>
                            <a href={"https://www.pinterest.com/Allstate/"} target="_blank">
                                <i className="fab fa-pinterest-square fa-2x"></i>
                            </a>
                        </div>
                        <div className={"col-1"}>
                            <a href={"https://www.twitter.com/Allstate/"} target="_blank">
                                <i className="fab fa-twitter-square fa-2x"></i>
                            </a>
                        </div>
                        <div className={"col-1"}>
                            <a href={"https://www.youtube.com/Allstate/"} target="_blank">
                                <i className="fab fa-youtube-square fa-2x"></i>
                            </a>
                        </div>
                        <div className={"col-3"}></div>
                    </div>
                </div>
            </footer>
        )
    }
}

ReactDOM.render(<App course="ReactJS"/>, document.getElementById('contentgoeshere'));

