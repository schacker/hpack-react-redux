import * as ACTION_TYPE from '../../common/actionTypeConstants'
import React from 'react'
import { Tag } from 'antd'

const initState = {
  dataSource: [],
  columns: [{
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    text: (text) => <a href='javascript:;'>{text}</a>
  }, {
    title: '年龄',
    dataIndex: 'age',
    key: 'age'
  }, {
    title: '住址',
    dataIndex: 'address',
    key: 'address'
  }, {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (tags) => (
      <span>
        {tags.map((tag) => <Tag color='blue' key={tag}>{tag}</Tag>)}
      </span>
    )
  }]
}

export default function (state = initState, action) {
  const { type, payload } = action
  switch (type) {
    case ACTION_TYPE.ACTION_ADD:
      const d = state.dataSource
      d.push(payload.data)
      return Object.assign({}, { ...state }, { dataSource: d })
    case ACTION_TYPE.ACTION_REMOVE:
      state.dataSource.pop()
      return { ...state, dataSource: state.dataSource }
    default:
      return state
  }
}
