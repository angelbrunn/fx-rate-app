import fetch from 'node-fetch';

const URL_FIXER_API = `${CONFIG.URL_FIXER_API}`;
const ACCESS_KEY = `${CONFIG.KEY_FIXER_API}`;
const API_FIXER_SYMBOLS = `${CONFIG.API_FIXER_SYMBOLS}`;
const API_FIXER_LATEST = `${CONFIG.API_FIXER_LATEST}`;

export const getAllSymbols = async () => {
    return await fetch(
        `${URL_FIXER_API}/${API_FIXER_SYMBOLS}?access_key=${ACCESS_KEY}`,
        {
            method: 'post',
            mode: 'cors'
        }
    )
        .then(res => {
            return res.json();
        })
        .catch(err => console.log(`Error call api fixer - ${err}`));
};

export const getRatesByBase = async (base, symbols) => {
    return await fetch(
        `${URL_FIXER_API}/${API_FIXER_LATEST}?access_key=${ACCESS_KEY}&base=${base}&symbols=${symbols}`,
        {
            method: 'post',
            mode: 'cors'
        }
    )
        .then(res => {
            return res.json();
        })
        .catch(err => console.log(`Error call api fixer - ${err}`));
};

export const callRates = async (base, symbols) => {
    let rest = null;
    await getRatesByBase(base, symbols).then(response => {
        console.log('resp', response.rates);
        rest = response.rates;
    });
    console.log('callRates', rest);
    return rest;
};
