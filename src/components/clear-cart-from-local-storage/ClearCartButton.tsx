import React from 'react';

const ClearCartButton = () => {
    const clearStorage = () => {
        localStorage.clear();
        alert('Veti sterge toate comenzile');
    };

    return <button onClick={clearStorage}>Stergere Comenzi</button>;
};

export default ClearCartButton;
