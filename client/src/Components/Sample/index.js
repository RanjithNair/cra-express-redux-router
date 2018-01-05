import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from './Actions'
import './Sample.css'

class Sample extends Component {
  async componentDidMount () {
    await this.props.actions.fetchSampleData()
  }

  render () {
    return (
      <div>
        <h1>Sample Data from API call</h1>
        <h3>{this.props.data.name}</h3>
      </div>
    )
  }
}

function mapStateToProps (state, ownProps) {
  return { data: state.sample }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sample)
