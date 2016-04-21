
import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import Header from '../../components/Header';
import MainSection from '../../components/MainSection';
import * as TodoActions from '../../actions/todos';
import style from './style.css';
import favicon from './favicon.ico';
import touchIcon from './apple-touch-icon-152x152.jpg';

class App extends Component {
  render() {
    const { todos, actions, children } = this.props;
    return (
      <div className={style.normal}>
        <Helmet link={[ {rel: 'icon', href: favicon}, {rel: 'apple-touch-icon', href: touchIcon} ]} />
        <Header addTodo={actions.addTodo} />
        <MainSection todos={todos} actions={actions} />
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
    actions: bindActionCreators(TodoActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
