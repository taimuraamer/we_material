'use strict';

var user = {
    name: 'Zakir',
    age: 21,
    address: 'Dir, Lower, Maidan',
    subjects: ['C++', 'Java', 'PHP', 'Javascript', 'React']
};

var handle = function handle() {
    console.log('clicked...');
};

var template = React.createElement('div', null);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
