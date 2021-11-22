export const buildSymbols = symbols => {
    const result = [];
    Object.keys(symbols).map(key => {
        result.push({ value: key, label: symbols[key] });
    });
    return result;
};

export const buildLatest = symbols => {
    let result = [];
    symbols.map(key => {
        result.push(key.value);
    });
    return result;
};
