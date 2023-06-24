import React, { useState } from 'react';
import Header from './Header';
import Form from './Form';
import Output from './Output';

const App = () => {
    const [inputValue, setInputValue] = useState('');
    const [result, setResult] = useState('');

    const handleFormSubmit = (value) => {
        setResult(value);
    };

    return (
        <div>
            <Header style={{ backgroundColor: '#f2f2f2' }} />
            <Form handleFormSubmit={handleFormSubmit} />
            <Output result={result} />
        </div>
    );
};

export default App;
