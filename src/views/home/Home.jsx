import React, { useState, useEffect } from 'react';
import MultiSelect from 'react-multi-select-component';
import { useTranslation } from 'react-i18next';
import { Header } from '../header/Header';
import { List } from '../../components/list/list';
import { buildSymbols, buildLatest } from '../../utils/utils';
import { getAllSymbols, callRates } from '../../services/fixer.utils.service';

export const Home = () => {
    // info - only one base in free version fixer
    const [base, setBase] = useState('EUR');
    const [symbols, setSymbols] = useState([]);
    const [rates, setRates] = useState('not_data');
    const [isLoading, setIsLoading] = useState(true);
    const [showTableRate, setShowTableRate] = useState(false);
    const [selected, setSelected] = useState([]);
    const { t } = useTranslation();

    useEffect(() => {
        if (symbols && symbols.length <= 0) {
            getAllSymbols().then(response => {
                setSymbols(buildSymbols(response.symbols));
            });
        }

        if (symbols) {
            if (isLoading) {
                setIsLoading(false);
            }
        }
    }, [symbols, isLoading]);

    useEffect(() => {
        if (rates !== 'not_data' && rates) {
            setShowTableRate(true);
        }
    }, [rates, showTableRate]);

    return (
        <>
            <Header />
            <div className="Home-Conteiner">
                <br></br>
                <br></br>
                <br></br>
                {isLoading ? (
                    <div className="Home-Loading" data-testid="Home-Loading">
                        {t('home_loading')}
                    </div>
                ) : (
                    <>
                        <br></br>
                        <h1>{t('home_h1')}</h1>
                        <br></br>
                        <br></br>
                        <div className="form">
                            <div className="formSearch">
                                <div className="sectionBase">
                                    <p> {t('home_select_base')}</p>
                                    <div className="base">
                                        <select value="base">
                                            {/* info - only EUR base in free version fixer */}
                                            <option value="eur">
                                                {t('home_select_value_base')}
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <div className="sectionBase">
                                    <p> {t('home_select_tax')} </p>
                                    <div className="symbols">
                                        <MultiSelect
                                            className="symbolsMultiple"
                                            options={symbols}
                                            value={selected}
                                            onChange={setSelected}
                                            labelledBy="Select"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="BtnCallRate">
                                <button
                                    className="btn"
                                    onClick={() =>
                                        callRates(
                                            'EUR',
                                            buildLatest(selected)
                                        ).then(response => {
                                            setRates(response);
                                        })
                                    }
                                >
                                    {t('home_select_calculate')}
                                </button>
                            </div>
                        </div>
                        <br></br>
                        <br></br>
                        <br></br>
                        {showTableRate ? (
                            <List rates={rates} base={base} />
                        ) : (
                            <></>
                        )}
                    </>
                )}
            </div>
        </>
    );
};
