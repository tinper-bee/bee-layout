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
                <Col md={3} mdOffset={3}><div className='grayDeep'></div></Col>
                <Col md={3} mdOffset={3}><div className='gray'></div></Col>
                <Col md={6} mdOffset={6}><div className='grayLight'></div></Col>
                <Col md={4} mdOffset={2}><div className='gray'></div></Col>
                <Col md={2} mdOffset={3}><div className='grayLight'></div></Col>
                <Col md={6} mdOffset={3}><div className='grayDeep'></div></Col>
            </Row>
        )
    }
}
