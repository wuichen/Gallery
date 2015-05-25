'use strict';

var React = require('react/addons');
var StyleSheet = require('react-style');

var styles = StyleSheet.create({
    header: {
      color: 'white',
      backgroundColor: '#1bc0a0',
      textAlign: 'center',
      fontSize: '30px',
      fontWeight: 100,
      marginBottom: '30px'
    }
})
var Header = React.createClass({

  render: function() {
    return (
      <header>

        <div styles={styles.header}>
        	Gallery
        </div>

      </header>
    );
  }

});

module.exports = Header;