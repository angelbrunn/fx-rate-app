import React from 'react';
import { useTranslation } from 'react-i18next';

export const List = props => {
    const { rates, base } = props;
    const { t } = useTranslation();

    return (
        <div className="List-Conteiner">
            {rates ? (
                <div>
                    <div className="hdRate">
                        <div className="rw"> {t('list_hd_base')}</div>
                        <div className="rw"> {t('list_hd_pair')}</div>
                        <div className="rw"> {t('list_hd_tax')}</div>
                        <div className="rw"> {t('list_hd_value')}</div>
                    </div>
                    {Object.keys(rates)
                        .map(key => [{ key, value: rates[key] }])
                        .map((opt, index) => (
                            <>
                                <div
                                    index={index}
                                    className="tbRate"
                                    data-testid="list-item"
                                >
                                    <div
                                        className="rw"
                                        data-testid="list-item-base"
                                    >
                                        {base}
                                    </div>
                                    <div
                                        className="rw"
                                        data-testid="list-item-pair"
                                    >
                                        {base + opt[0].key}
                                    </div>
                                    <div
                                        className="rw"
                                        data-testid="list-item-key"
                                    >
                                        {opt[0].key}
                                    </div>
                                    <div
                                        className="rw"
                                        data-testid="list-item-value"
                                    >
                                        {opt[0].value}
                                    </div>
                                </div>
                            </>
                        ))}
                </div>
            ) : (
                <div className="ntData">{t('list_not_data')}</div>
            )}
        </div>
    );
};
