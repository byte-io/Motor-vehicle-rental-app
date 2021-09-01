import React from 'react';
import CustomModal from './Modal/CustomModal';
import Data from '../Table/Data.json';
import './book.css'

class Book extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
            days : 0,
            selectValue: 'Air Compressor 12 GAS',
            price: 0,
        }
    }

    selectHandler = (e) => {
        this.setState({selectValue: e.target.value})
    }

    calculateDay = () => {
        if (this.props.firstStage){
            var fromDate = document.getElementById("date-from").value
            var toDate = document.getElementById("date-to").value
            var startDate = Date.parse(fromDate);
            var endDate = Date.parse(toDate);
            var timeDiff = endDate - startDate;
            var daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
            this.setState({days: daysDiff})
        }
        
    }
    calculatePrice = () => {
        this.calculateDay()
        Data.map(model=> {
            if(model.name == this.state.selectValue){
                this.setState((prevState)=>({price: model.price*prevState.days}))
            }
        })
        this.props.firstStageUpdater()
        
    }

    render(){
        const firstStageBooking = <>
                        <select onChange={this.selectHandler} value={this.state.selectValue}>
                            {Data.map(model=> <option value={model.name}>{model.name}</option>)}
                        </select>
                        <span>From</span><input type='date' id='date-from' />
                        <span>To</span><input type='date' id='date-to'/>
                    </>
        const secondStageBooking = <>
                                    <p>Your estimated price is {this.state.price}</p>
                                    <p>Do you want to procedure?</p>
                                    </>
        return (
                <CustomModal
                    bookModal={this.props.bookModal}
                    closeBookHandler={this.props.closeBookHandler}
                    calculatePrice={this.calculatePrice}>
                    <h1>Book a product</h1>
                       {this.props.firstStage ? firstStageBooking : secondStageBooking} 
                </CustomModal>
            
        )
    }
}

export default Book;
