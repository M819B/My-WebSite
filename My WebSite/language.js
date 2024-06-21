// language.js

function changeLanguage(language) {
    const formTitleEn = document.getElementById('form-title-en');
    const formTitleAr = document.getElementById('form-title-ar');

    if (language === 'en') {
        formTitleEn.style.display = 'block';
        formTitleAr.style.display = 'none';
        // Add similar logic for other elements if needed
    } else if (language === 'ar') {
        formTitleEn.style.display = 'none';
        formTitleAr.style.display = 'block';
        // Add similar logic for other elements if needed
    }
}

// Initialize language (default to English)
changeLanguage('en');
