import React from 'react';
import { useParams } from 'react-router-dom';
import { Container } from '@material-ui/core';

const PokePage = () => {
    const { pokeName } = useParams();
    return (
        <React.Fragment>
            <Container maxWidth="lg">
                <h1>Detail page in dev process</h1>
                Pokemon name: {pokeName}
            </Container>
        </React.Fragment>
    );
};
export default PokePage;
