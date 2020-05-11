import React from 'react';
import * as axios from 'axios'
import { Container, Card } from 'semantic-ui-react'

import Menu from '../container/Menu'
import BookCard from '../container/BookCard'
import Filter from '../container/Filter';

class App extends React.Component {

  componentWillMount() {
    const { setBooks } = this.props
    axios.get('http://localhost:3000/books.json').
      then(({ data }) => {
        setBooks(data)
      })
  }

  render() {
    const { books, isReady } = this.props;
    return (
      <Container>
        <Menu />
        <Filter />
        <Card.Group itemsPerRow={4}>
          {!isReady
            ? 'Загрузка...'
            : books.map((book, i) => <BookCard key={i} {...book} />)}
        </Card.Group>
      </Container>
    );
  }
}




export default App;
