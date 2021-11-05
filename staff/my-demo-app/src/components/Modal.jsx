import { Component } from 'react'
import './Modal.css'

class Modal extends Component {
    constructor(props) {
        super()

        this.state = {
            level: props.level ? props.level : 'error',
            message: props.message
        }
    }

    // componentDidMount () {
    //     if (this.props.level) {this.setState({level: this.props.level})}
    // }

    render() {
        return <>
            <div className='modal'>
                <div className='modal__panel'>
                    <h1 className='modal__tittle'>
                        {this.state.level === 'error' && 'Error!'}
                        {this.state.level === 'warn' && 'Upss..'}
                        {this.state.level === 'success' && 'Great!'}
                    </h1>
                    <p className='modal__message'>{this.state.message}</p>
                    <button className='modal__button button' onClick={() => this.props.onGetIt()}>Get it</button>
                </div>
            </div>
        </>
    }
}

export default Modal