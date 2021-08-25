import React, { Component } from 'react';
import { WriterWrapper, WriterBar, WriterItem, WriterInfo } from '../style';
import { connect } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAtom } from '@fortawesome/free-solid-svg-icons';


class Writer extends Component {
  render() {
    const { list } = this.props;
    return (
      <WriterWrapper>
        <WriterBar>
          <div className='left-text'>Recommended Writers</div>
          <div className='right-text'>
            <FontAwesomeIcon 
            // forwardedRef={(icon) => { this.spinIcon = icon }} 
            icon={faAtom} 
            className='iconfont icon spin' />
            Switch
          </div>
        </WriterBar>
        {
          list.map((item) => {
            return (
              <WriterItem key={item.get('id')}>
                <img 
                  alt=''
                  className='profile-pic'
                  src={item.get('imgUrl')}/>
                <WriterInfo>
                  <div className='name'>{item.get('name')}</div>
                  <div className='description'>{item.get('description')}</div>
                </WriterInfo>
                <div className='follow'> 
                  + Follow
                </div>
              </WriterItem>
            )
          })
        }
        
        
      </WriterWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  list: state.getIn(['home', 'writerList'])
});


export default connect(mapStateToProps)(Writer);