import React from 'react';
import Modal from 'react-modal';
import './CustomModal.css'
Modal.setAppElement('#root')
class CustomModal extends React.Component {
    constructor(props){
        super(props)

    }

    render() {
        return (
            <Modal 
                isOpen={this.props.bookModal} 
                onRequestClose={this.props.closeBookHandler}
                style={{
                    overlay : {
                        backgroundColor: 'rgba(0, 0, 0, 0.7)'
                    },
                    content : {
                        top: '150px',
                        left: '250px',
                        right: '250px',
                        bottom: '150px',
                        padding: '50px',
                        borderRadius: "20px",
                        border: "6px solid black"
                    }
                }}>
                    {this.props.children}  
                    <div className='modalButtonDiv'>
                            <button  onClick={this.props.closeBookHandler}>No</button>
                            <button onClick={this.props.calculatePrice}>Yes</button>
                    </div>         
            </Modal>
        )

    }

}

export default CustomModal;
