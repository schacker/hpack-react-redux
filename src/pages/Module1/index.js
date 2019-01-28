import React, { Component } from 'react'
import { Table, Button } from 'antd'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from './action'

class Module1Component extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  /**
   * addList
   */
  addListItem () {
    this.props._addList1({
      key: Date.now() + '',
      name: '胡彦斌12',
      age: 32,
      address: '西湖区湖底公园12号',
      tags: ['1']
    })
  }
  /**
   * removeListItem
   */
  removeListItem () {
    this.props._removeList1()
  }

  render () {
    console.log(this.props)
    const { columns, dataSource } = this.props.data
    return (
      <div>
        <Table columns={columns} dataSource={dataSource} />
        <section>
          <Button onClick={this.addListItem.bind(this)}>add</Button>
          <Button onClick={this.removeListItem.bind(this)}>remove</Button>
        </section>
      </div>)
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.Module1
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(actions, dispatch)
}

const Module1 = connect(mapStateToProps, mapDispatchToProps)(Module1Component)

export default Module1
