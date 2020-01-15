// Keep track of all the form information in the app state
// Once the purchase page has been reached
  // Display all the information currently saved
// 

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
    this.addFormInfo1 = this.addFormInfo1.bind(this);
    this.addFormInfo2 = this.addFormInfo2.bind(this);
    this.addFormInfo3 = this.addFormInfo3.bind(this);
  }

  // Cycle through pages after each click
  handleButtonClick() {
    this.setState({page: this.state.page + 1});
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

  render () {
    // Cycles through pages 0-4 only
    // 0: checkout 1: form 1, 2: form 2, 3: form 3, 4: purchase
    var currentPage = this.state.page % 5;

    console.log(this.state);

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
          <F1 pageChange={this.handleButtonClick} addFormInfo1={this.addFormInfo1}/>
        </div>
      );
    }
    
    // Form 2
    if (currentPage === 2) {
      return (
        <div>
          <F2 pageChange={this.handleButtonClick} addFormInfo2={this.addFormInfo2}/>
        </div>
      );
    }

    // Form 3
    if (currentPage === 3) {
      return (
        <div>
          <F3 pageChange={this.handleButtonClick} addFormInfo3={this.addFormInfo3}/>
        </div>
      );
    }

    // Purchase page
    if (currentPage === 4) {
      return (
        <Purchase 
          pageChange={this.handleButtonClick}
          form1={this.props.f1information}
          form2={this.props.f2information}
          form3={this.props.f3information}
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
        <h1>Form 1: 1st step</h1>
        <form>
          <div>
            <label>Name: </label>
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange}></input>
          </div>
          <div>
            <label>Email: </label>
            <input type="email" name="email" value={this.state.email} onChange={this.handleChange}></input>
          </div>
          <div>
            <label>Password: </label>
            <input type="password" name="password" value={this.state.password} onChange={this.handleChange}></input>
          </div>
        </form>
        <button 
          onClick={(event) => {
            console.log(this.state);
            this.props.addFormInfo1(this.state);
            this.props.pageChange();
          }
        }>
          Next
        </button>
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
        <form>
          <h2>Address</h2>
          <div>
            <label>Line 1: </label>
            <input type="text" name="line1" value={this.state.line1} onChange={this.handleChange}></input>
          </div>
          <div>
            <label>Line 2: </label>
            <input type="text" name="line2" value={this.state.line2} onChange={this.handleChange}></input>
          </div>
          <div>
            <label>State: </label>
            <input type="text" name="state" value={this.state.state} onChange={this.handleChange}></input>
          </div>
          <div>
            <label>Zip Code: </label>
            <input type="text" name="zip" value={this.state.zip} onChange={this.handleChange}></input>
          </div>
          <div>
            <label>Phone Number: </label>
            <input type="tel" name="phone" value={this.state.phone} onChange={this.handleChange}></input>
          </div>
        </form>
        <button 
          onClick={() => {
            console.log(this.state);
            this.props.addFormInfo2(this.state);
            this.props.pageChange();
          }
        }>
          Next
        </button>
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
        <form>
          <div>
            <label>Credit Card: </label>
            <input type="text" name="credit"></input>
          </div>
          <div>
            <label>Expiracy date: </label>
            <input type="date" name="date"></input>
          </div>
          <div>
            <label>CVV: </label>
            <input type="text" name="cvv"></input>
          </div>
          <div>
            <label>Billing Zip Code: </label>
            <input type="text" name="billing"></input>
          </div>
        </form>
        <button 
          onClick={() => {
            console.log('test');
            this.props.addFormInfo3(this.state);
            this.props.pageChange();
          }
        }>
          Next
        </button>
      </div>
    );
  }
}

// Last page summarizing all the data
var Purchase = (props) => (
  <div>
    <h1>Purchase: Final step</h1>
    <div className="form1">

    </div>
    <div className="form2">

    </div>
    <div className="form3">

    </div>
    <button onClick={props.pageChange}>Purchase</button>
  </div>
);

// Render to index.html
ReactDOM.render(<App />, document.getElementById('app'));