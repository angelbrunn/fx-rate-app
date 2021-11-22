import React from 'react';
import { useTranslation } from 'react-i18next';

export const Header = () => {
    const { t } = useTranslation();
    return (
        <div className="Header-Conteiner" data-testid="header-cont">
            <div className="title">
                <h1>{t('header_h1')}</h1>
            </div>
        </div>
    );
};
