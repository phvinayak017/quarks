import React, { Component } from 'react'

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            time: new Date(),
            isHidden: 'false',
        }
    }

    handleClick = () => {
        this.setState({
            isHidden: !this.state.isHidden
        })
    }

    componentDidMount() {
        this.setState({
            date: new Date().toLocaleDateString()
        })

        setInterval(() => {
            this.setState({
                time: new Date()
            })
        }, 1000);
    }




    render() {
        const { isHidden, date, time } = this.state

        let hh = time.getHours()
        let mm = time.getMinutes()
        let ss = time.getSeconds()

        return (
            < div className="homepage" >
                <div className='date'>
                    <div className='datedisp'> {isHidden ? "" : <p>{date}</p>}</div>
                    <div className='buttondisp'>
                        <button
                            className='button'
                            onClick={this.handleClick}
                        >{isHidden ? "Show Date" : "Hide Date"}</button>
                    </div>
                </div>
                <div className='clock'>
                    <p>{("0" + (hh % 12)).slice(-2)}:{('0' + mm).slice(-2)}:{('0' + ss).slice(-2)}  {hh > 12 ? "PM" : "AM"}</p>
                </div>
            </div >
        )
    }
}
