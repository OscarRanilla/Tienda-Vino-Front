import React from 'react';
import { useTranslation } from 'react-i18next';
import './AgeModal.css';

function AgeModal({ onConfirm }) {
    const { t } = useTranslation();

    const handleConfirm = () => {
        if (onConfirm) onConfirm();
    };

    const handleDeny = () => {
        window.location.href = 'https://www.google.com';
    };

    return (
        <div className="age-modal-overlay">
            <div className="age-modal-content">
                <h2>{t('ageModal.title')}</h2>
                <p>{t('ageModal.prompt')}</p>
                <div className="age-modal-buttons">
                    <button className="age-modal-yes" onClick={handleConfirm}>
                        {t('ageModal.yes')}
                    </button>
                    <button className="age-modal-no" onClick={handleDeny}>
                        {t('ageModal.no')}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AgeModal;
