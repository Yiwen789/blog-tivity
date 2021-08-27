import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { 
  DetailWrapper,
  Header,
  Content,
} from './style';
import { actionCreators } from './store';

class Detail extends PureComponent {
    render() {
      console.log(this.props);
        return (
            <DetailWrapper>
              <Header>
                {this.props.title}
                <Content dangerouslySetInnerHTML={{__html: this.props.content}} /> 
              </Header>
              
            </DetailWrapper>
        )
    }
    componentDidMount() {
      this.props.getDetail(this.props.match.params.id);
    }
}

const mapStateToProps = (state) => ({
  title: state.getIn(['detail', 'title']),
  content: state.getIn(['detail', 'content'])
});

const mapDispatch = (dispatch) => ({
  getDetail() {
    dispatch(actionCreators.getDetail());
  }
})

export default connect(mapStateToProps, mapDispatch)(Detail);