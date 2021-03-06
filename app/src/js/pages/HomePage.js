var React = require('react');

var user = null;

var LoginPage = require('./LoginPage');
var LoginForm = require('../components/LoginForm');

var utils = require('../utils');
var text = utils.generateIpsum(50);

var HomePage = React.createClass({
  render: function () {
    return (
      <div className="page">
        <div className="container">

          <div className='row'>
            <div className='six columns'>
                <h1>Home Page</h1>
                <div>
                  {text}
                </div>
            </div>

            <div className='six columns'>
              <LoginForm />
            </div>
          </div>

        </div>
      </div>
    );
  }
});

module.exports = HomePage;