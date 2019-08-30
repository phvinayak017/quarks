import React, { Component } from 'react'
import Axios from 'axios';

export default class Giphy extends Component {

    constructor(props) {
        super(props);
        this.state = {
            images: [],
            word: ""
        }
    }


    handleChange = (e) => {
        const { value } = e.target
        Axios
            .get(`http://api.giphy.com/v1/stickers/search?q=${this.state.word}&api_key=4Y1vqNfPtuyMLc768UO55vl7zDseYyOi&limit=5`)
            .then(response => {
                const data = response.data.data
                console.log(data)
                let images = data.map(({ images }) => {
                    return (images['480w_still'])
                })
                this.setState({
                    images
                })
            })

        // ({ data: { data } }) => {
        //     let images = data.map(({ images }) => (images['480w_still']))
        //     console.log(images)
        //     this.setState({ images })
        // }

        this.setState({
            word: value
        })
    }

    handleClick = () => {
        console.log("clicked")

    }
    render() {
        return (
            <div>
                <input
                    className="search"
                    type="search"
                    placeholder="Search Giphy Images"
                    value={this.value}
                    onChange={this.handleChange} />
                {/* <button
                    onClick={this.handleClick}>
                    Search
                </button>
                <span>{this.state.word}</span> */}
                <div className='imgdisp'>
                    {this.state.images.map(image => {
                        // console.log(user.url)
                        return <img className="image" key={image} src={image.url} alt="" />
                    })}
                </div>
            </div>
        )
    }
}
