import React from 'react'
import { push } from 'connected-react-router'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const Home = props => (
  <div>
    <h1>Home</h1>
    <p>Welcome home!</p>
    <button onClick={() => props.changePage()}>Go to about page via redux</button>
    <button onClick={() => props.changeLanguage('en')}>Convert to English</button>
    <button onClick={() => props.changeLanguage('fr')}>Convert to French</button>
  </div>
)

const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: () => push('/about-us')
}, dispatch)

export default connect(
  null,
  mapDispatchToProps,
)(Home)
