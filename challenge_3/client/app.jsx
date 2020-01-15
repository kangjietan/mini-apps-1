class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 0,
      f1information: '',
      f2information: '',
      f3information: ''
    };

    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick() {
    this.setState({page: this.state.page + 1});
  }

  render () {
    // Cycles through pages 0-4 only
    // 0: checkout 1: form 1, 2: form 2, 3: form 3, 4: purchase
    var currentPage = this.state.page % 5;

    if (currentPage === 0) {
      return (
        <div>
          <button onClick={this.handleButtonClick}>Checkout</button>
        </div>
      );
    }

    if (currentPage === 1) {
      return (
        <div>
          <F1 pageChange={this.handleButtonClick}/>
        </div>
      );
    }
    
    if (currentPage === 2) {
      return (
        <div>
          <F2 pageChange={this.handleButtonClick}/>
        </div>
      );
    }

    if (currentPage === 3) {
      return (
        <div>
          <F3 pageChange={this.handleButtonClick}/>
        </div>
      );
    }

    if (currentPage === 4) {
      return (
        <Purchase pageChange={this.handleButtonClick}/>
      );
    }

  }
}

////////////////////// FORMS and purchase page /////////////////////////

// name, email, password for account creation
var F1 = (props) => (
  <div>
    <h1>Form 1: 1st step</h1>
    <form>
      <div>
        <label>Name: </label>
        <input type="text" name="name"></input>
      </div>
      <div>
        <label>Email: </label>
        <input type="email" name="email"></input>
      </div>
      <div>
        <label>Password: </label>
        <input type="password" name="password"></input>
      </div>
    </form>
    <button onClick={props.pageChange}>Next</button>
  </div>
);

// ship to address (line 1, line 2, state, zip code) and phone number
var F2 = (props) => (
  <div>
    <h1>Form 2: 2nd step</h1>
    <form>
      <h2>Address</h2>
      <div>
        <label>Line 1: </label>
        <input type="text" name="line1"></input>
      </div>
      <div>
        <label>Line 2: </label>
        <input type="text" name="line2"></input>
      </div>
      <div>
        <label>State: </label>
        <input type="text" name="state"></input>
      </div>
      <div>
        <label>Zip Code: </label>
        <input type="text" name="zip"></input>
      </div>
      <div>
        <label>Phone Number: </label>
        <input type="tel" name="phone"></input>
      </div>
    </form>
    <button onClick={props.pageChange}>Next</button>
  </div>
);

// credit card number, expiracy date, CVV, and billing zip code
var F3 = (props) => (
  <div>
    <h1>Form 3: 3rd step</h1>
    <form>
      <input type="text"></input>
    </form>
    <button onClick={props.pageChange}>Next</button>
  </div>
);

// Last page summarizing all the data
var Purchase = (props) => (
  <div>
    <h1>Purchase: Final step</h1>
    <button onClick={props.pageChange}>Purchase</button>
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));