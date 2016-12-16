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
            <Col md={8} mdPush={4} >
            <div className='grayDeep'></div>
            </Col>
            <Col md={4} mdPull={8} >
            <div className='gray'></div>
            </Col>
            </Row>
        )
    }
}
