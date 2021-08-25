import React, { Component } from 'react'

class ImageCard extends Component {
    constructor(props){
        super(props);
        this.state = { spans: 0 }
        this.imageRef = React.createRef();
        this.setSpans = this.setSpans.bind(this);
    }
    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans);
    }
    setSpans() {
        const height = (this.imageRef.current.clientHeight);
        const spans = Math.ceil(height / 10);
        this.setState({ spans })
    }
    render(){
        const {alt_description, urls } = this.props.image;
        return (
            <div className="ImageCard" style={{gridRowEnd: `span ${this.state.spans}` }} >
                <img 
                    alt={alt_description}
                    src={urls.regular} 
                    ref={this.imageRef}
                />
            </div>
        )
    }
}

export default ImageCard;