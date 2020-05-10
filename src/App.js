import React from 'react';
import { connect } from 'react-redux'
import { setBooks } from './actions/books'
import * as axios from 'axios'

class App extends React.Component {

  componentWillMount() {
    const { setBooks } = this.props
    axios.get('http://localhost:3000/books.json').then(({ data }) => {
      setBooks(data)
    })
  }

  render() {
    const { books,isReady } = this.props
    return (
      <ul>
        {!isReady ? "Загрузка...":
          books.map(book => (
            <li key={book.id}>
              <b>{book.title}</b>-{book.author}
            </li>
          ))}
      </ul>
    )
  }
}


const mapStateToProps = ({books}) => ({
  books: books.items,
  isReady:books.isReady
})

// const mapStateToProps = (state) => {
//   return ({
//     books: state.books.items
//   })
// }

const mapDispatchToProps = dispatch => ({
  setBooks: books => dispatch(setBooks(books))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
