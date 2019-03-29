// A组件就是我们的外部Modal提示框组件。用来包裹我们的内部组件。
import React from 'react';
import './index.css'

// 定义一个函数
// 传入一个组件作为参数
// 这里我们返回一个匿名函数，接收传递得值

export default (title = "我是标题") => {

  return (WrappedComponent) => {
      // 返回一个组件
      return class A extends React.Component {
        constructor(props) {
          super(props);
          this.state = {
            value: ''
          }
        }

        // [[1]] 定义一个点击事件
        handleClick = () => {
          // 可以调用B组件的方法
          this.wref.getName()
        }

        // {1} 根据输入设置 val
        handleOnInputChange = (e) => {
          this.setState({
            value: e.target.value
          })
        }

        ChangeVal = (e) => {
          //console.log(e)
        }
        

        render() {
          // [1] 首先我们可以获取到给最外层组件传递的props
          const prop = this.props;
          console.log(prop, this.state.value)

          // {2} 设置新的props
          var newProps = {
            value: this.state.value,           // 传入值
            onInput: this.handleOnInputChange,  // 监听表单的输入
            ChangeVal: this.ChangeVal
          }

          return (
            <div className="a-container">
              <div className="header">
                <div className="title">提示</div>
                <div className="close">X</div>
              </div>
                {/* [2] 可以传递下去，传到B组件中 */}
                {/* [3] 另外sex是新增的 */}
                {/* [[2]] 绑定ref */}
                <WrappedComponent ref={ (v) => this.wref = v } sex={"男"} {...this.props} {...newProps} />
                {/* [[3]] 点击事件触发处 */}
                <button onClick={ this.handleClick }>获取name</button>
            </div>
          )
        }
      }
    }

}