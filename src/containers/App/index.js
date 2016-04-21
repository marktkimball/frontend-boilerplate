
import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import style from './style.css';
import favicon from './favicon.ico';
import touchIcon from './apple-touch-icon-152x152.jpg';

class App extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className={style.app}>
        <Helmet link={[ {rel: 'icon', href: favicon}, {rel: 'apple-touch-icon', href: touchIcon} ]} />
        {children}
      </div>
    );
  }
}

App.propTypes = {
  todos: PropTypes.array,
  actions: PropTypes.objectOf(PropTypes.func).isRequired,
  children: PropTypes.element,
};

function mapStateToProps(state) {
  return {
    todos: state.todos
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: (bindActionCreators({/*should be your actions*/}, dispatch))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
