import React, { PureComponent } from "react";

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      books: [
        {
          name: "123",
        },
      ],
    };
  }

  addNewBook() {
    const param = { name: "222" };
    const newBooks = [...this.state.books];
    newBooks.push({ ...param });
    this.setState({
      books: newBooks,
    });
  }

  render() {
    const { books } = this.state;
    return (
      <>
        {books.map((item, index) => {
          return <h2 key={index}>{item.name}</h2>;
        })}
        <button onClick={() => this.addNewBook()}>+1</button>
      </>
    );
  }
}
