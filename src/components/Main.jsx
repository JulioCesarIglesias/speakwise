import React, { useState, useEffect } from 'react';
import Category from './Category.jsx';

const Main = ({ category, totalWords, categoryName }) => {    
    const [selectedCategory, setSelectedCategory] = useState(category);

    // Atualiza a categoria quando o usuário seleciona uma nova
    useEffect(() => {
        setSelectedCategory(category);
    }, [category]);

    return (
        <main className="container">
            <Category selectedCategory={selectedCategory} totalWords={totalWords} categoryName={categoryName} />
        </main>
    );
};

export default Main;
