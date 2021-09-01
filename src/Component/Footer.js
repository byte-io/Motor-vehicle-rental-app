import React from "react";
import './footer.css';
import Book from './Book'

class Footer extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {  bookModal: false,
                        firstStage: true
                      }
    }

    openBookHandler = () => {
        this.setState({bookModal: true})
    }

    firstStageUpdater=() => {
        this.setState({firstStage: false})
    }

    closeBookHandler = () => {
        this.setState({bookModal: false, firstStage: true})
    }

    render() {
        return (
            <div id="footer">
                <Book
                    bookModal={this.state.bookModal}
                    closeBookHandler={this.closeBookHandler}
                    firstStageUpdater={this.firstStageUpdater}
                    firstStage={this.state.firstStage}
                />
                <button  onClick={this.openBookHandler}>Book</button>
                <button >Return</button>
            </div>
        )
    } 

}

export default Footer;
