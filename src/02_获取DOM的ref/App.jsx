import { createRef, forwardRef, PureComponent } from "react";

class Child extends PureComponent {
  render() {
    return (
      <>
        <div>Chile</div>
      </>
    );
  }
}

const ChildFunc = forwardRef(function (props, ref) {
  return <div ref={ref}>ChildRef</div>;
});

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.divRef = createRef();
    this.ChildRef = createRef();
    this.ChildFuncRef = createRef();
  }

  getDivRef() {
    console.log(this.divRef.current);
    console.log(this.ChildRef.current);
    console.log(this.ChildFuncRef.current);
  }

  render() {
    return (
      <>
        <div ref={this.divRef}>hhahaha</div>
        <Child ref={this.ChildRef} />
        <ChildFunc ref={this.ChildFuncRef} />
        <button onClick={() => this.getDivRef()}>点击</button>
      </>
    );
  }
}

export default App;
