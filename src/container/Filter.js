import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as filterActions from '../actions/filter'
import Filter from '../components/Filter'
 
const mapStateToProps = ({ filter }) => ({
    filterBy: filter.filterBy
  })
  
  // const mapStateToProps = (state) => {
  //   return ({
  //     books: state.books.items
  //   })
  // }
  
  // const mapDispatchToProps = dispatch => ({
  //   setBooks: books => dispatch(setBooks(books))
  // })
  
  const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(filterActions, dispatch)
  }
  )
  
  export default connect(mapStateToProps, mapDispatchToProps)(Filter)