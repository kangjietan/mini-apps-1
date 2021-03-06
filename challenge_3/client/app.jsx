// Keep track of all the form information in the app state
// Once the purchase page has been reached
  // Display all the information currently saved
// Sent all information to db to store

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 0,
      f1information: [],
      f2information: [],
      f3information: []
    };

    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleBackClick = this.handleBackClick.bind(this);
    this.addFormInfo1 = this.addFormInfo1.bind(this);
    this.addFormInfo2 = this.addFormInfo2.bind(this);
    this.addFormInfo3 = this.addFormInfo3.bind(this);
    this.sendInfoToDB = this.sendInfoToDB.bind(this);
  }

  // Cycle through pages after each click
  handleButtonClick() {
    this.setState({
      page: this.state.page + 1
    });
  }

  // Go back one page
  handleBackClick() {
    this.setState({
      page: this.state.page - 1
    });
  }

  // Add object of information
  addFormInfo1(info) {
    this.state.f1information = info;
  }

  addFormInfo2(info) {
    this.state.f2information = info;
  }

  addFormInfo3(info) {
    this.state.f3information = info;
  }

  // Send post request to db to store info
  sendInfoToDB(data) {
    // axios from script tag in index.html
    axios.post('http://localhost:3000/purchase', data)
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    });
  }

  render () {
    // Cycles through pages 0-4 only
    // 0: checkout 1: form 1, 2: form 2, 3: form 3, 4: purchase
    var currentPage = this.state.page % 5;

    // Home page with checkout button
    if (currentPage === 0) {
      return (
        <div>
          <button onClick={this.handleButtonClick}>Checkout</button>
        </div>
      );
    }

    // Form 1
    if (currentPage === 1) {
      return (
        <div>
          <F1 
          pageChange={this.handleButtonClick} 
          addFormInfo1={this.addFormInfo1}
          backwards={this.handleBackClick}
          />
        </div>
      );
    }
    
    // Form 2
    if (currentPage === 2) {
      return (
        <div>
          <F2 
          pageChange={this.handleButtonClick} 
          addFormInfo2={this.addFormInfo2}
          backwards={this.handleBackClick}
          />
        </div>
      );
    }

    // Form 3
    if (currentPage === 3) {
      return (
        <div>
          <F3 
          pageChange={this.handleButtonClick} 
          addFormInfo3={this.addFormInfo3}
          backwards={this.handleBackClick}
          />
        </div>
      );
    }

    // Purchase page
    if (currentPage === 4) {
      return (
        <Purchase 
          pageChange={this.handleButtonClick}
          form1={this.state.f1information}
          form2={this.state.f2information}
          form3={this.state.f3information}
          post={this.sendInfoToDB}
          backwards={this.handleBackClick}
        />
      );
    }

  }
}

////////////////////// FORMS and purchase page /////////////////////////

// name, email, password for account creation
class F1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      password: ''
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div>
        <h1>Form 1: 1st step CREATE AN ACCOUNT</h1>
        <button onClick={this.props.backwards}>Back</button>
        <form id="form1" onSubmit={(e) => {
          e.preventDefault();
          this.props.addFormInfo1(this.state);
          this.props.pageChange();
        }}>
          <div>
            <label>Name: </label>
            <input 
              type="text" name="name" minLength="2" required="required"
              value={this.state.name} 
              onChange={this.handleChange}>
            </input>
          </div>
          <div>
            <label>Email: </label>
            <input 
              type="email" name="email" minLength="3" required="required"
              value={this.state.email} 
              onChange={this.handleChange}>
            </input>
          </div>
          <div>
            <label>Password: </label>
            <input type="password" name="password" minLength="8" required="required"
            value={this.state.password} 
            onChange={this.handleChange}></input>
          </div>
        </form>
        <button type="submit" form="form1">Next</button>
      </div>
    );
  }
}

// ship to address (line 1, line 2, state, zip code) and phone number
class F2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      line1: '',
      line2: '',
      city: '',
      state: '',
      zip: '',
      phone: ''
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div>
        <h1>Form 2: 2nd step</h1>
        <button onClick={this.props.backwards}>Back</button>
        <form id="form2" onSubmit={(e) => {
          e.preventDefault();
          this.props.addFormInfo2(this.state);
          this.props.pageChange();
        }}>
          <h2>Address</h2>
          <div>
            <label>Line 1: </label>
            <input type="text" name="line1" required="required"
            value={this.state.line1
            } onChange={this.handleChange}></input>
          </div>
          <div>
            <label>Line 2: </label>
            <input type="text" name="line2"
            value={this.state.line2
            } onChange={this.handleChange}></input>
          </div>
          <div>
            <label>City: </label>
            <input type="text" name="city" required="required"
            value={this.state.city}
             onChange={this.handleChange}></input>
          </div>
          <div>
            <label>State: </label>
            <input type="text" name="state" required="required"
            value={this.state.state
            } onChange={this.handleChange}></input>
          </div>
          <div>
            <label>Zip Code: </label>
            <input type="text" name="zip" required="required"
            value={this.state.zip} 
            onChange={this.handleChange}></input>
          </div>
          <div>
            <label>Phone Number: </label>
            <input type="tel" name="phone" required="required"
            value={this.state.phone
            } onChange={this.handleChange}></input>
          </div>
        </form>
        <button type="submit" form="form2">Next</button>
      </div>
    );
  }
}

// credit card number, expiracy date, CVV, and billing zip code
class F3 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      credit: '',
      date: '',
      cvv: '',
      billing: ''
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div>
        <h1>Form 3: 3rd step</h1>
        <button onClick={this.props.backwards}>Back</button>
        <form id="form3" onSubmit={(e) => {
          e.preventDefault();
          this.props.addFormInfo3(this.state);
          this.props.pageChange();
        }}>
          <div>
            <label>Credit Card: </label>
            <input type="text" name="credit" required="required"
            value={this.state.credit} 
            onChange={this.handleChange}></input>
          </div>
          <div>
            <label>Expiracy date: </label>
            <input type="date" name="date" required="required"
            value={this.state.date} 
            onChange={this.handleChange}></input>
          </div>
          <div>
            <label>CVV: </label>
            <input type="text" name="cvv" required="required"
            value={this.state.cvv} 
            onChange={this.handleChange}></input>
          </div>
          <div>
            <label>Billing Zip Code: </label>
            <input type="text" name="billing" required="required"
            value={this.state.billing} 
            onChange={this.handleChange}></input>
          </div>
        </form>
        <button type="submit" form="form3">Next</button>
      </div>
    );
  }
}

// Last page summarizing all the data
var Purchase = (props) => (
  <div>
    <h1>Purchase: Final step</h1>
    <button onClick={props.backwards}>Back</button>
    <div className="form1">
      <div>Name: {props.form1.name}</div>
      <div>Email: {props.form1.email}</div>
    </div>
    <div className="form2">
      <div>Line1: {props.form2.line1}</div>
      <div>Line2: {props.form2.line2}</div>
      <div>City: {props.form2.city}</div>
      <div>State: {props.form2.state}</div>
      <div>Zip Code: {props.form2.zip}</div>
      <div>Phone: {props.form2.phone}</div>
    </div>
    <div className="form3">
      <div>Credit: {props.form3.credit}</div>
      <div>Billing Zip: {props.form3.billing}</div>
    </div>
    <button 
      onClick={() => {
        props.pageChange();
        // Object.assign overwrites. Using it to extend
        var userInfo = Object.assign(props.form1, props.form2, props.form3);
        props.post(userInfo);
      }
    }>
      Purchase
    </button>
  </div>
);

// Render to index.html
ReactDOM.render(<App />, document.getElementById('app'));