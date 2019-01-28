import React, { Component } from 'react'
import { Table, Button } from 'antd'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from './action'

class Module2Component extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  /**
   * addList
   */
  addListItem () {
    this.props._addList2({
      key: Date.now() + '',
      name: '胡彦斌2',
      age: 32,
      address: '西湖区湖底公园2号',
      tags: ['1', '2']
    })
  }
  /**
   * removeListItem
   */
  removeListItem () {
    this.props._removeList2()
  }

  render () {
    const { columns, dataSource } = this.props.data
    return (
      <div>
        <Table columns={columns} dataSource={dataSource} />
        <section>
          <Button onClick={this.addListItem.bind(this)}>add2</Button>
          <Button onClick={this.removeListItem.bind(this)}>remove2</Button>
        </section>
      </div>)
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.Module2
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(actions, dispatch)
}

const Module2 = connect(mapStateToProps, mapDispatchToProps)(Module2Component)

export default Module2
