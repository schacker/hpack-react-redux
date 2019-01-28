import * as ACTION_TYPE from '../../common/actionTypeConstants'

export function _addList1 (data) {
  return (dispatch) => {
    return dispatch({
      type: ACTION_TYPE.ACTION_ADD,
      payload: {
        data: data || {}
      }
    })
  }
}

export function _removeList1 (data) {
  return (dispatch) => {
    dispatch({
      type: ACTION_TYPE.ACTION_REMOVE,
      payload: {
        data: data || {}
      }
    })
  }
}
