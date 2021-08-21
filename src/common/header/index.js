import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  SearchWrapper,
  SearchInfo,
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
          <SearchInfo></SearchInfo>
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
    focused: state.getIn(['header', 'focused'])
  }
}

//当有event出现后会派发actions
const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus() {
      dispactch(actionCreators.searchFocus());
    },
    handleInputBlur() {
      dispactch(actionCreators.searchBlur());
    }
  }
}

export default connect(mapStateToProps, mapDisPatchToProps)(Header);
