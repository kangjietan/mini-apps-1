class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 0
    }
  }

  handleButtonClick() {
    this.setState({page: page + 1});
  }

  render () {
    return (
      <div>
        <button onClick={this.handleButtonClick}>Checkout</button>
        <F1 />
      </div>
    );
  }
}

// name, email, password for account creation
var F1 = () => (
  <div>
    <form>
      <input type="text"></input>
    </form>
    <button>Next</button>
  </div>
);

// ship to address (line 1, line 2, state, zip code) and phone number
var F2 = () => (
  <div>
    <form>
      <input type="text"></input>
    </form>
    <button>Next</button>
  </div>
);

// credit card number, expiracy date, CVV, and billing zip code
var F3 = () => (
  <div>
    <form>
      <input type="text"></input>
    </form>
    <button>Next</button>
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));