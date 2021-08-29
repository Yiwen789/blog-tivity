import styled from 'styled-components';
import logoPic from '../../static/logo_header.png';

export const HeaderWrapper = styled.div`
  z-index: 1;
  position: relative;
  height: 58px;
  border-top: 2px solid #2e190f;
  border-bottom: 2px solid #2e190f;
  background: #efd9ce;
`;

export const Logo = styled.div`
  position: absolute;
  top: 10px;
  left: 120px;
  display: block;
  width: 100px;
  height: 56px;
  background: url(${logoPic});
  background-size: contain;
  background-repeat: no-repeat;
  transform: scale(2.5);
`;

export const Nav = styled.div`
  width: 960px;
  height: 100%;
  padding-right: 70px;
  box-sizing: border-box;
  margin: 0 auto;
`;

export const NavItem = styled.div`
line-height: 56px;
padding: 0 15px;
font-size: 17px;
color: #333;
&.left {
  float: left;
}
&.right {
  float: right;
  color: #969696;
}
&.active {
  color: #C87C56;
}
`;

export const NavSearch = styled.input.attrs({
  placeholder: 'Search'
})`
  width: 160px;
  height: 38px;
  padding: 0 30px 0 20px;
  margin-top: 9px;
  margin-left: 20px;
  box-sizing: border-box;
  border: none;
  outline: none;
  box-shadow: 2px 1px 3px #c87c56;
  border-radius: 19px;
  background: #faf3f0;
  font-size: 14px;
  color: #faf3f0;
  &.slide-enter {
    width: 160px;
    transition: all .2s ease-out;
  }
  &.slide-enter-active {
    width: 240px;
  }
  &.slide-exit {
    transition: all .2s ease-out;
  }
  &.slide-exit-active {
    width: 160px;
  }
  &::placeholder {
    color: #999;
  }
  &.focused {
    width: 240px;
  }
`;

export const SearchWrapper = styled.div`
  position: relative;
  float: left;
  .zoom {
    position: absolute;
    right: 5px;
    bottom: 9px;
    width: 22px;
    height: 22px;
    line-height: 22px;
    border-radius: 11px;
    text-align: center;
    &.focused {
      background: #777;
      color: $fff;
    }
  }
  .icon{
    position: relative;
    height: 13px;
    line-height: 13px;
    margin-top: 2px;
    margin-right: 4px;
    text-align: center;
  }
`

export const SearchInfo = styled.div`
  position: absolute;
  left: 0;
  top: 56px;
  width: 240px;
  padding: 0 20px;
  box-shadow: 0px 0px 10px #666;
  border-radius: 4px;
  background: #fff;
`;

export const SearchInfoTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
`;

export const SearchInfoSwitch = styled.span`
  float: right;
  font-size: 13px;
  cursor: pointer;
  .spin {
    display: block;
    float: left;
    font-size: 12px;
    margin-right: 2px;
    transition: all .2s ease-in;
    transform: rotate(0deg);
    transorm-origin: center center;
  }
`;

export const SearchInfoList = styled.div`
  overflow: hidden;
`;

export const SearchInfoItem = styled.a`
  display: block;
  float: left;
  line-height: 20px;
  padding: 0 5px;
  margin-right: 10px;
  margin-bottom: 10px;
  font-size: 12px;
  border: 1px solid #ddd;
  color: #787878;
  border-radius: 2px;
`;

export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
`;
export const Button = styled.div`
  float: right;
  margin-top: 9px;
  margin-right: 20px;
  padding: 0 20px;
  line-height: 38px;
  border-radius: 19px;
  border: 1px solid #C87C56;
  font-size: 16px;
  &.reg {
    color: #C87C56;
  }
  &.writing {
    color: #fff;
    background: #C87C56
  }
  .iconfont{
    margin-right: 5px;
  }
`;