var React = require('react');
var utils = require('../utils');

var RegisterForm = require('../components/RegisterForm');

var RegisterPage = React.createClass({
  render: function () {
    var self = this;

    return (
      <div className='page'>
        <div className='container'>
          <div className='row centerBlock'>
            <div className='three columns' />
            <div className='six columns'>
              <RegisterForm />
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = RegisterPage;