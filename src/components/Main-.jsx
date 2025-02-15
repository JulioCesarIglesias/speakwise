import React, { useState } from 'react';
import Category from './Category.jsx';
import { wordsArray } from '../assets/database/words.js';

const Main = () => {
    const [category, setCategory] = useState('all');
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

        return wordsToDisplay;
    };

    return (
        <main className="container">
            {/* Botões de Categoria */}
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
        </main>
    );
};

export default Main;
