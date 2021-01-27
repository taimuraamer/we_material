'use strict';

var text = [];

var formHandler = function formHandler(e) {
    e.preventDefault();
    text.push(e.target.elements.username.value);
    reRender();
};

var appRoot = document.getElementById('app');

var reRender = function reRender() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'form',
            { onSubmit: formHandler },
            React.createElement('input', { type: 'text', name: 'username' }),
            React.createElement(
                'button',
                null,
                'Click'
            ),
            React.createElement(
                'ol',
                null,
                text.map(function (t) {
                    return React.createElement(
                        'li',
                        null,
                        t
                    );
                })
            )
        )
    );
    ReactDOM.render(template, appRoot);
};

reRender();
