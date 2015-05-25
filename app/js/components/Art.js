
var React = require('react/addons');

var styles = {

    text: {
        font: 'sans-serif',
        color: '#333',
        width: '90%',
        marginRight: 'auto',
        marginLeft: 'auto'
    },
    focused: {
        borderColor: '#1bc0a0'
    },
    notFocused: {

    }

}
var Art = React.createClass({

    render() {
        return (
            <div onClick={this.props.onClick} className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <a className='thumbnail article' style={this.props.focus ? styles.focused : styles.notFocused}>
                    <img className='artImage' src={this.props.picture}></img>
                    <hr className='artHr' />
                    <p className='artText'>{this.props.text}</p>
                </a>
            </div>

        );
    }
})

module.exports = Art;