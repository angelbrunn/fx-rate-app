import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { List } from './list';

afterEach(cleanup);

const base = 'EUR';
const rates = { AFN: 106.149281 };

// EXAMPLE WITH REACT TEST LIBRARY | STATUS: DEV
test('List Component - Can render without redux with defaults', () => {
    const { getByTestId, getByText } = render(
        <List rates={rates} base={base} />
    );

    expect(getByTestId('list-item-base')).toHaveTextContent('EUR');
    expect(getByTestId('list-item-pair')).toHaveTextContent('EURAFN');
    expect(getByTestId('list-item-key')).toHaveTextContent('AFN');
    expect(getByTestId('list-item-value')).toHaveTextContent(106.149281);
});
