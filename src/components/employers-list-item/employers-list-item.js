import { Component } from 'react';
import './employers-list-item.css';

class EmployersListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            increase: false,
            rise: false
        }
    }

    onIncrease = () => {
        this.setState(({increase}) => ({
        increase: !increase
        }))
    }

    addClass = () => {
        this.setState(({rise}) => ({
            rise: !rise
        }))
    }

    render() {
        const {name, salary} = this.props
        let {increase, rise} = this.state

        let classNames = "list-group-item d-flex justify-content-between like";
        if(increase) {
            classNames += " increase";
        }
        if (rise) {
            classNames += " like"
        }
    return (
       <li className={classNames}>
            <span className="list-group-item-label" onClick={this.addClass}>{name}</span>
            <input type="text" className="list-group-item-inut" defaultValue={salary + '$'} />
            <div className="d-flex justify-content-center align-items-center">
                <button type="button"
                    className="btn-cookie btn-sm"
                    onClick={this.onIncrease}>
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button" 
                    className="btn-trash btn-sm">
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-start"></i>
            </div>
       </li>
    )
    }
}

export default EmployersListItem;