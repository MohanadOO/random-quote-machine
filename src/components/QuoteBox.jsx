import React from 'react'
import './QuoteBox.css'

class QuoteBox extends React.Component {
render() {
    return (
        <div id = "quote-box">
        <Quote/>
        </div>
    );
    }
}

class Quote extends React.Component {
    constructor(props){
    super(props);
    this.state = {
        quote: [" .لا تعبدوا الله ليعطي، بل اعبدوه ليرضى، فإن رضي أدهشكم بعطائه",
                '.لا تنظر الى صغر الخطيئة ، و لكن انظر الى عظم من عصيت',
                'Simplicity is the ultimate sophistication.',
                'Whatever you do, do it well.'
            ],
        author: ['محمد متولي الشعراوي', 'ابن تيمية', 'Leonardo da Vinci' , 'Walt Disney'],
        random: Math.floor(Math.random() * 3),
        backgroundColor: ['#25CED1', '#FF8A5B', '#EA526F', '#353B3C']
    }
    this.newQuote = this.newQuote.bind(this);
    }
    newQuote(){
        this.setState({
          random: Math.floor(Math.random() * this.state.quote.length),
        })
    }  

    render(){

    let quote = this.state.quote;
    let author = this.state.author;
    let backgroundColor = this.state.backgroundColor;
    document.body.style.backgroundColor =  this.state.backgroundColor[this.state.random];
    
    let baseColorStyle = {
    color: backgroundColor[this.state.random],
}
    let backgroundColorStyle = {
    backgroundColor: backgroundColor[this.state.random],
}

    return (
        <div style = {baseColorStyle}>
        <q id = 'text'>{quote[this.state.random]}</q>
        <p id = 'author'>- {author[this.state.random]}</p>
        <div id = 'buttonsDiv'>
        <button style = {backgroundColorStyle}><a id = "tweet-quote" target = "_blank" href = "twitter.com/intent/tweet" style = {{color: '#f6f6f6'}}>Twitter</a></button>
        <button style = {backgroundColorStyle}>FaceBook</button>
        <button  style = {backgroundColorStyle} id = "new-quote" onClick ={this.newQuote}>New Quote</button>
        </div>
        </div>
    )
    }
}

export default QuoteBox