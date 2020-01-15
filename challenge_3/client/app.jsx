class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 0
    };

    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick() {
    this.setState({page: this.state.page + 1});
  }

  render () {
    var currentPage = this.state.page % 5;
    console.log(currentPage);

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

// name, email, password for account creation
var F1 = (props) => (
  <div>
    <h1>Form 1</h1>
    <form>
      <input type="text"></input>
    </form>
    <button onClick={props.pageChange}>Next</button>
  </div>
);

// ship to address (line 1, line 2, state, zip code) and phone number
var F2 = (props) => (
  <div>
    <h1>Form 2</h1>
    <form>
      <input type="text"></input>
    </form>
    <button onClick={props.pageChange}>Next</button>
  </div>
);

// credit card number, expiracy date, CVV, and billing zip code
var F3 = (props) => (
  <div>
    <h1>Form 3</h1>
    <form>
      <input type="text"></input>
    </form>
    <button onClick={props.pageChange}>Next</button>
  </div>
);

var Purchase = (props) => (
  <div>
    <h1>Purchase</h1>
    <button onClick={props.pageChange}>Purchase</button>
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));