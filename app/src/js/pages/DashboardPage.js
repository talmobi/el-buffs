var React = require('react');

var client = require('../client');

var utils = require('../utils');
var text = utils.generateIpsum(50);

var CloudList = require('../components/CloudList');

var DashboardPage = React.createClass({
  render: function () {
    return (
      <div className="page">
        <div className="container">

          <div className='row'>
            <div className='six columns'>
                <h1>Clouds</h1>
                <div>
                  <CloudList />
                </div>
            </div>

            <div className='six columns'>
              <div>
                {utils.generateIpsum(30)}
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
});

module.exports = DashboardPage;
