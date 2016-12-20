
import { Con, Row, Col } from '../src';
import { Panel } from 'bee-panel';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from 'bee-button';


const CARET = <i className="uf uf-chevronarrowdown"></i>;

const CARETUP = <i className="uf uf-chevronarrowup"></i>;


/**
 *
 * @title 基础布局
 * @description 使用<Row>组件和<Col>组件进行页面栅格切分
 *
 */

class Demo1 extends Component {
    render () {
        return (
            <Row>
                <Col md={12} xs={12} sm={12} ><div className='grayDeep'></div></Col>
                <Col md={6} xs={6} sm={6} ><div className='gray'></div></Col>
                <Col md={6}  xs={6} sm={6}><div className='grayLight'></div></Col>
                <Col md={4}  xs={4} sm={4}><div className='grayDeep'></div></Col>
                <Col md={4}  xs={4} sm={4}><div className='gray'></div></Col>
                <Col md={4}  xs={4} sm={4}><div className='grayLight'></div></Col>
                <Col md={3}  xs={3} sm={3}><div className='grayDeep'></div></Col>
                <Col md={3}  xs={3} sm={3}><div className='gray'></div></Col>
                <Col md={3}  xs={3} sm={3}><div className='grayLight'></div></Col>
                <Col md={3}  xs={3} sm={3}><div className='grayDeep'></div></Col>
                <Col md={2}  xs={2} sm={2}><div className='gray'></div></Col>
                <Col md={2}  xs={2} sm={2}><div className='grayLight'></div></Col>
                <Col md={2}  xs={2} sm={2}><div className='grayDeep'></div></Col>
                <Col md={2}  xs={2} sm={2}><div className='gray'></div></Col>
                <Col md={2}  xs={2} sm={2}><div className='grayLight'></div></Col>
                <Col md={2}  xs={2} sm={2}><div className='grayDeep'></div></Col>
            </Row>
        )
    }
}
/**
 *
 * @title 偏移的栅格
 * @description 使用mdOffset lgOffset smOffset xsOffset来设置栅格偏移的量
 *
 */

class Demo2 extends Component {
    render () {
        return (
            <Row>
                <Col md={3} mdOffset={3} xs={3} xsOffset={3} sm={3} smOffset={3}><div className='grayDeep'></div></Col>
                <Col md={3} mdOffset={3} xs={3} xsOffset={3} sm={3} smOffset={3}><div className='gray'></div></Col>
                <Col md={6} mdOffset={6} xs={6} xsOffset={6} sm={6} smOffset={6}><div className='grayLight'></div></Col>
                <Col md={4} mdOffset={2} xs={4} xsOffset={2} sm={4} smOffset={2}><div className='gray'></div></Col>
                <Col md={2} mdOffset={3} xs={2} xsOffset={3} sm={2} smOffset={3}><div className='grayLight'></div></Col>
                <Col md={6} mdOffset={3} xs={6} xsOffset={3} sm={6} smOffset={3}><div className='grayDeep'></div></Col>
            </Row>
        )
    }
}
/**
 *
 * @title 平移的栅格
 * @description 通过设置mdPull, mdPush来控制平移的量
 *
 */

class Demo3 extends Component {

    render () {
        return (
            <Row>
            <Col md={8} mdPush={4} xs={8} xsPush={4} sm={8} smPush={4} >
            <div className='grayDeep'></div>
            </Col>
            <Col md={4} mdPull={8} xs={4} xsPull={8} sm={4} smPull={8}  >
            <div className='gray'></div>
            </Col>
            </Row>
        )
    }
}
var DemoArray = [{"example":<Demo1 />,"title":" 基础布局","code":"/**\r\n *\r\n * @title 基础布局\r\n * @description 使用<Row>组件和<Col>组件进行页面栅格切分\r\n *\r\n */\r\n\r\nclass Demo1 extends Component {\r\n    render () {\r\n        return (\r\n            <Row>\r\n                <Col md={12} xs={12} sm={12} ><div className='grayDeep'></div></Col>\r\n                <Col md={6} xs={6} sm={6} ><div className='gray'></div></Col>\r\n                <Col md={6}  xs={6} sm={6}><div className='grayLight'></div></Col>\r\n                <Col md={4}  xs={4} sm={4}><div className='grayDeep'></div></Col>\r\n                <Col md={4}  xs={4} sm={4}><div className='gray'></div></Col>\r\n                <Col md={4}  xs={4} sm={4}><div className='grayLight'></div></Col>\r\n                <Col md={3}  xs={3} sm={3}><div className='grayDeep'></div></Col>\r\n                <Col md={3}  xs={3} sm={3}><div className='gray'></div></Col>\r\n                <Col md={3}  xs={3} sm={3}><div className='grayLight'></div></Col>\r\n                <Col md={3}  xs={3} sm={3}><div className='grayDeep'></div></Col>\r\n                <Col md={2}  xs={2} sm={2}><div className='gray'></div></Col>\r\n                <Col md={2}  xs={2} sm={2}><div className='grayLight'></div></Col>\r\n                <Col md={2}  xs={2} sm={2}><div className='grayDeep'></div></Col>\r\n                <Col md={2}  xs={2} sm={2}><div className='gray'></div></Col>\r\n                <Col md={2}  xs={2} sm={2}><div className='grayLight'></div></Col>\r\n                <Col md={2}  xs={2} sm={2}><div className='grayDeep'></div></Col>\r\n            </Row>\r\n        )\r\n    }\r\n}\r\n","desc":" 使用<Row>组件和<Col>组件进行页面栅格切分"},{"example":<Demo2 />,"title":" 偏移的栅格","code":"/**\r\n *\r\n * @title 偏移的栅格\r\n * @description 使用mdOffset lgOffset smOffset xsOffset来设置栅格偏移的量\r\n *\r\n */\r\n\r\nclass Demo2 extends Component {\r\n    render () {\r\n        return (\r\n            <Row>\r\n                <Col md={3} mdOffset={3} xs={3} xsOffset={3} sm={3} smOffset={3}><div className='grayDeep'></div></Col>\r\n                <Col md={3} mdOffset={3} xs={3} xsOffset={3} sm={3} smOffset={3}><div className='gray'></div></Col>\r\n                <Col md={6} mdOffset={6} xs={6} xsOffset={6} sm={6} smOffset={6}><div className='grayLight'></div></Col>\r\n                <Col md={4} mdOffset={2} xs={4} xsOffset={2} sm={4} smOffset={2}><div className='gray'></div></Col>\r\n                <Col md={2} mdOffset={3} xs={2} xsOffset={3} sm={2} smOffset={3}><div className='grayLight'></div></Col>\r\n                <Col md={6} mdOffset={3} xs={6} xsOffset={3} sm={6} smOffset={3}><div className='grayDeep'></div></Col>\r\n            </Row>\r\n        )\r\n    }\r\n}\r\n","desc":" 使用mdOffset lgOffset smOffset xsOffset来设置栅格偏移的量"},{"example":<Demo3 />,"title":" 平移的栅格","code":"/**\r\n *\r\n * @title 平移的栅格\r\n * @description 通过设置mdPull, mdPush来控制平移的量\r\n *\r\n */\r\n\r\nclass Demo3 extends Component {\r\n\r\n    render () {\r\n        return (\r\n            <Row>\r\n            <Col md={8} mdPush={4} xs={8} xsPush={4} sm={8} smPush={4} >\r\n            <div className='grayDeep'></div>\r\n            </Col>\r\n            <Col md={4} mdPull={8} xs={4} xsPull={8} sm={4} smPull={8}  >\r\n            <div className='gray'></div>\r\n            </Col>\r\n            </Row>\r\n        )\r\n    }\r\n}\r\n","desc":" 通过设置mdPull, mdPush来控制平移的量"}]


class Demo extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({ open: !this.state.open })
    }

    render () {
        const { title, example, code, desc  } = this.props;
        let caret = this.state.open ? CARETUP : CARET;
        let text = this.state.open ? "隐藏代码" : "查看代码";

        const footer = (
            <Button shape="block" onClick={ this.handleClick }>
                { caret }
                { text }
            </Button>
        );

        return (
            <Col md={12}>
                <h3>{ title }</h3>
                <p>{ desc }</p>
                <Panel collapsible headerContent expanded={ this.state.open } colors='bordered' header={ example } footer={footer} footerStyle = {{padding: 0, borderColor: "transparent"}}>
                    <pre><code className="hljs javascript">{ code }</code></pre>
                </Panel>
            </Col>
        )
    }
}

class DemoGroup extends Component {
    constructor(props){
        super(props)
    }
    render () {
        return (
                <Row>
                    {DemoArray.map((child,index) => {

                        return (
                            <Demo example= {child.example} title= {child.title} code= {child.code} desc= {child.desc} key= {index}/>
                        )

                    })}
                </Row>
        )
    }
}

ReactDOM.render(<DemoGroup/>, document.getElementById('tinperBeeDemo'));
