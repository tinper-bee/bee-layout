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
                <Col md={12} ><div className='grayDeep'></div></Col>
                <Col md={6} ><div className='gray'></div></Col>
                <Col md={6} ><div className='grayLight'></div></Col>
                <Col md={4} ><div className='grayDeep'></div></Col>
                <Col md={4} ><div className='gray'></div></Col>
                <Col md={4} ><div className='grayLight'></div></Col>
                <Col md={3} ><div className='grayDeep'></div></Col>
                <Col md={3} ><div className='gray'></div></Col>
                <Col md={3} ><div className='grayLight'></div></Col>
                <Col md={3} ><div className='grayDeep'></div></Col>
                <Col md={2} ><div className='gray'></div></Col>
                <Col md={2} ><div className='grayLight'></div></Col>
                <Col md={2} ><div className='grayDeep'></div></Col>
                <Col md={2} ><div className='gray'></div></Col>
                <Col md={2} ><div className='grayLight'></div></Col>
                <Col md={2} ><div className='grayDeep'></div></Col>
            </Row>
        )
    }
}
