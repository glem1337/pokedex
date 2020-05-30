import React from 'react';
import { useParams } from 'react-router-dom';

const PokePage = () => {
    const { pokeName } = useParams();
    return <React.Fragment>{pokeName}</React.Fragment>;
};
export default PokePage;
