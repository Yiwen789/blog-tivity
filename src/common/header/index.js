import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  SearchWrapper,
  Addition,
  Button
} from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Header = (props) => {
  return (
    <HeaderWrapper>
      <Logo />
      <Nav>
        <NavItem className='left active'>首页</NavItem>
        <NavItem className='left '>下载App</NavItem>
        <NavItem className='right '>登录</NavItem>
        <NavItem className='right '>Aa</NavItem>
        <SearchWrapper>
          <CSSTransition
            in={props.focused}
            timeout={200}
            classNames='slide'
          >
            <NavSearch
              className={props.focused ? 'focused' : ''}
              onFocus={props.handleInputFocus}
              onBlur={props.handleInputBlur}></NavSearch>
          </CSSTransition>
          <FontAwesomeIcon icon={faTimes} className={props.focused ? 'focused iconfont' : 'iconfont'} />
        </SearchWrapper>
      </Nav>
      <Addition>
        <Button className='writing'>
          <FontAwesomeIcon icon={faTimes} className='iconfont' />
          Write Blog
        </Button>
        <Button className='reg'>注册</Button>
      </Addition>
    </HeaderWrapper>
  );
}


//把store里的state映射到组件的props中
const mapStateToProps = (state) => {
  return {
    focused: state.focused
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus() {
      const action = {
        type: 'search_focus'
      }
      dispatch(action);
    },
    handleInputBlur() {
      const action = {
        type: 'search_blur'
      }
    }
  }
}

export default connect(mapStateToProps, mapDisPatchToProps)(Header);
