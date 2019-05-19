import React from 'react'
import './dropdown.scss'

class Dropdown extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      hover: false
    }
  }
  render () {
    return (
      <div className={this.state.hover ? 'dropdown hover' : 'dropdown'}
        onMouseEnter={() => this.setState({ hover: true })}
        onMouseLeave={() => this.setState({ hover: false })} >
        <div className='menu'>
          <span className='title'>支持服务配置</span>
          <i className='icon' />
        </div>
        <div className='panel'>
          <li><a href='javascript:;'>资金管理</a></li>
          <li><a href='javascript:;'>账号管理</a></li>
          <li><a href='javascript:;'>客服管理</a></li>
        </div>
      </div>
    )
  }
}

export default Dropdown
