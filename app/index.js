var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');

class App extends React.Component {
    render() {
        return (
            <div>
                I am trying this out for the first time!
            </div>
        )
    }
}

ReactDOM.render(
    <App/>, 
    document.getElementById('app')
);
