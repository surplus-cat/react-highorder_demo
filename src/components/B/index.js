
import React from "react";
import A from '../A/index'
import './index.css'

class B extends React.Component {
  getName = () => {
    console.log('获取到了name')
  }

  render() {
    /* [1]在B组件中就可以拿到通过A组件传来的props */
    return (
      <div className="wrap">
        我的姓名： {this.props.name}<br />
        我的性别： {this.props.sex}<br />
        
        {/* 使用传入的值, 这样便可以将子组件内部的实现抽取出来, 放到公共的组件中去, 统一管理 */}
        <input type="text" value={this.props.value} onInput={this.props.onInput} onChange={this.props.ChangeVal} />
      </div>
    )
  }
}

// 调用A()方法去包裹我们的B组件。
// 返回的不是B组件, 而是被A() 方法处理过的组件
export default A("提示1")(B);
