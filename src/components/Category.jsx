import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { wordsArray } from '../assets/database/words.js';

const Category = ({ selectedCategory, totalWords, categoryName }) => {
    const { pathname } = useLocation();
    const isHome = pathname === "/";

    // console.log(categoryName)

    const capitalizeFirstLetter = (categoryName) => {
        return categoryName.charAt(0).toUpperCase() + categoryName.slice(1);
    };

    categoryName = (categoryName === undefined) ? "" : capitalizeFirstLetter(categoryName);

    const [category, setCategory] = useState(selectedCategory || 'all');
    const [searchTerm, setSearchTerm] = useState('');

    // Função para pegar as palavras filtradas pela categoria e pesquisa
    const getFilteredWords = () => {
        let wordsToDisplay = [];

        if (category === 'all') {
            Object.values(wordsArray).forEach(categoryWords => {
                wordsToDisplay = [...wordsToDisplay, ...categoryWords];
            });
        } else {
            wordsToDisplay = wordsArray[category] || [];
        }

        if (searchTerm) {
            wordsToDisplay = wordsToDisplay.filter(word =>
                word.english.toLowerCase().includes(searchTerm.toLowerCase()) ||
                word.portuguese.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        // Se estiver na home, limita o número de palavras exibidas
        return isHome ? wordsToDisplay.slice(0, 16) : wordsToDisplay;
    };

    return (
        <>
            <h1 className='container category-title'>{categoryName}</h1>

            {/* Botões de Categoria */}            
            {isHome && (
                <div className="categories">
                    {['all', 'numbers', 'animals', 'colors', 'verbs', 'food'].map((cat) => (
                        <button
                            key={cat}
                            className={`category-btn ${category === cat ? 'active' : ''}`}
                            onClick={() => setCategory(cat)}
                        >
                            {cat === 'all' ? 'Todas' : cat.charAt(0).toUpperCase() + cat.slice(1)}
                        </button>
                    ))}
                </div>
            )}

            {/* Input de Pesquisa */}
            <div className="search-container">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Pesquisar palavra..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            {/* Renderizar palavras */}
            <div className="words-container">
                {getFilteredWords().map((word, index) => (
                    <div key={index} className="word-card">
                        <h3>{word.english}</h3>
                        <p>{word.portuguese}</p>
                        <p className="pronunciation">{word.pronunciation}</p>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Category;
