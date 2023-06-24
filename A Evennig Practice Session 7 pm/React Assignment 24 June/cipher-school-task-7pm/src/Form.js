import React, { useState } from 'react';

const Form = ({ handleFormSubmit }) => {
    const [inputValue, setInputValue] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [outputValue, setOutputValue] = useState('');

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate the input
        if (inputValue.trim() === '') {
            setErrorMessage('Input cannot be empty');
        } else if (inputValue.length < 3) {
            setErrorMessage('Input must be at least 3 characters long');
        } else {
            setErrorMessage('');
            handleFormSubmit(inputValue);
            setOutputValue(inputValue);
        }
    };

    const handleClear = () => {
        setInputValue('');
        setErrorMessage('');
        setOutputValue('');
    };

    return (
        <div style={containerStyles}>
            <form onSubmit={handleSubmit} style={formStyles}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleChange}
                    style={inputStyles}
                    placeholder="Enter your input"
                />
                <div style={buttonContainerStyles}>
                    <button type="submit" style={submitButtonStyles}>
                        Submit
                    </button>
                    <button type="button" onClick={handleClear} style={clearButtonStyles}>
                        Clear
                    </button>
                </div>
                {errorMessage && <p style={errorStyles}>{errorMessage}</p>}
            </form>
            {outputValue && (
                <div style={outputContainerStyles}>
                    <h2 style={outputStyles}>Output: {outputValue}</h2>
                </div>
            )}
        </div>
    );
};

export default Form;

// CSS Styles
const containerStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: 'linear-gradient(to right, #4e54c8, #8f94fb)',
};

const formStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    background: '#fff',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
};

const inputStyles = {
    padding: '10px',
    margin: '10px 0',
    width: '300px',
    border: 'none',
    borderRadius: '4px',
    boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',
};

const buttonContainerStyles = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '10px',
};

const submitButtonStyles = {
    padding: '10px 20px',
    margin: '0 5px',
    background: '#4e54c8',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
};

const clearButtonStyles = {
    padding: '10px 20px',
    margin: '0 5px',
    background: '#8f94fb',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
};

const errorStyles = {
    color: 'red',
    margin: '10px 0',
};

const outputContainerStyles = {
    marginTop: '10px',
};

const outputStyles = {
    color: '#fff',
};
