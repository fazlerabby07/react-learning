import React from 'react';
import ReactDOM from 'react-dom';
import Pet from './Pet';

const App = () => {
    return React.createElement('div', { id: 'something-important' }, [
        React.createElement('h1', {}, 'Adopt Me!'),
        React.createElement(Pet, {
            name: 'Luna',
            animal: 'Dog',
            breed: 'havanese',
        }),
        React.createElement(Pet, {
            name: 'Pepper',
            animal: 'Bird',
            breed: 'Cocktiel',
        }),
        React.createElement(Pet, {
            name: 'Doink',
            animal: 'cat',
            breed: 'Mixed',
        }),
    ]);
};

ReactDOM.render(React.createElement(App), document.getElementById('root'));
