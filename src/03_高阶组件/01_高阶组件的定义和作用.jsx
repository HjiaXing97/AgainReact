import { PureComponent } from "react";

class HelloWorld extends PureComponent {
  render() {
    return <div>HelloWorld</div>;
  }
}

function hocCom(Cpn) {
  class NewCpn extends PureComponent {
    render() {
      return <Cpn />;
    }
  }

  return NewCpn;
}

const NewHello = hocCom(HelloWorld);

class App extends PureComponent {
  render() {
    return (
      <>
        <NewHello />
      </>
    );
  }
}

export default App;
