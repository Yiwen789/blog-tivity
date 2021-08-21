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
    const { focused, list, page, totalPage, mouseIn, handleMouseEnter, handleMouseLeave } = this.props;
    const jsList = list.toJS();
    const pageList = [];

    if (jsList.length) {
      for (let i = page * 10; i < page * 10; i++) {
        pageList.push(
          <SearchInfoItem key={item}>{jsList[i]}</SearchInfoItem>
        )
      }
    }

    if (focused || mouseIn) {
      <SearchInfo
        onMouseEnter={handleMouseEnter}
        oonMouseLeave={handleMouseLeave}
      >
        <SearchInfoTitle>
          Trending
          <SearchInfoSwitch onClick={() => handleChangePage(page, totalPage, this.spinIcon)}>
            <FontAwesomeIcon ref={(icon) => { this.spinIncon = icon }} icon={faTimes} className='iconfont spin' />
            Swtich
          </SearchInfoSwitch>
        </SearchInfoTitle>
        <SearchInfoList>
          {pageList}
        </SearchInfoList>
      </SearchInfo>
    } else {
      return null;
    }
  }
  render() {
    const { focused, handleInputFocus, handleInputBlur, handleMouseEnter } = this.props;
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
              in={focused}
              timeout={200}
              classNames='slide'
            >
              <NavSearch
                className={focused ? 'focused' : ''}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}></NavSearch>
            </CSSTransition>
            <FontAwesomeIcon icon={faTimes} className={focused ? 'focused iconfont zoom' : 'iconfont zoom'} />
            {this.getListArea(focused)}
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
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage']),
    mouseIn: state.getIn(['header', 'mouseIn'])
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
    },
    handleMouseEnter() {
      diapatch(actionCreators.mouseEnter());
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave());
    },
    handleChangePage() {
      dispatch(actionCreators.changePage());
    },
    handleChangePage(page, totalPage, spin) {
      let originAngle = spin.style.transform.replace(/[^0--9]/ig, ''); //非数字都替换为空
      if (originAngle) {
        originAngle: parseInt(originAngle, 10);
      } else {
        originAngle = 0;
      }
      spin.style.transform = 'rotate(' + originAngle + '360)';

      if (page < totalPage) {
        dispatch(actionCreators.changePage(page + 1));
      } else {
        dispatch(actionCreators.changePage(1));
      }
      console.log(page, totalPage);
    }
  }
}

export default connect(mapStateToProps, mapDisPatchToProps)(Header);
