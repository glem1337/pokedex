import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/',
});

export class PokeAPI {
    static getPokemonsList = async (offset, limit) => {
        try {
            const response = await instance.get(`pokemon/?offset=${offset}&limit=${limit}/`);
            if (response.status === 200) {
                return response.data;
            }
        } catch (e) {
            console.error('PokeAPI.getPokemonsList() error: ', e);
            throw new Error(e.message);
        }
    };

    static getPokemonByName = async (name) => {
        try {
            const response = await instance.get(`pokemon/${name}/`);
            if (response.status === 200) {
                return response.data;
            }
        } catch (e) {
            console.error('PokeAPI.getPokemonByName() error: ', e);
            throw new Error(e.message);
        }
    };

    static getPokemonTypes = async () => {
        try {
            const response = await instance.get(`type/`);
            if (response.status === 200) {
                return response.data;
            }
        } catch (e) {
            console.error('PokeAPI.getPokemonTypes() error: ', e);
            throw new Error(e.message);
        }
    };
}
