import React from 'react';
import { useParams } from 'react-router-dom';
import Main from '../components/Main';

const Words = () => {
    const { category } = useParams(); // Pegando a categoria da URL

    // console.log(category)

    return (
        <Main key={category} category={category} categoryName={category} />
    );
};

export default Words;
