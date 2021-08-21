import React, { Component } from 'react';
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
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem,
  Addition,
  Button
} from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

class Header extends Component {
  getListArea() {
    if (this.props.focused) {
      <SearchInfo>
        <SearchInfoTitle>
          Trending
          <SearchInfoSwitch>Swtich</SearchInfoSwitch>
        </SearchInfoTitle>
        <SearchInfoList>
          {
            this.props.list.map((item) => {
              return <SearchInfoItem key={item}>{item}</SearchInfoItem>
            })
          }
        </SearchInfoList>
      </SearchInfo>
    } else {
      return null;
    }
  }
  render() {
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
              in={this.props.focused}
              timeout={200}
              classNames='slide'
            >
              <NavSearch
                className={this.props.focused ? 'focused' : ''}
                onFocus={this.props.handleInputFocus}
                onBlur={this.props.handleInputBlur}></NavSearch>
            </CSSTransition>
            <FontAwesomeIcon icon={faTimes} className={this.props.focused ? 'focused iconfont' : 'iconfont'} />
            {this.getListArea(this.props.focused)}
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
}

//把store里的state映射到组件的props中
const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list'])
  }
}

//当有event出现后会派发actions
const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus() {
      diapatch(actionCreators.getList());
      dispactch(actionCreators.searchFocus());
    },
    handleInputBlur() {
      dispactch(actionCreators.searchBlur());
    }
  }
}

export default connect(mapStateToProps, mapDisPatchToProps)(Header);
