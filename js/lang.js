// Dil seçimini kontrol etmek için localStorage kullanalım
const selectedLanguage = localStorage.getItem('language');

// Dil seçimi kontrol edilir ve localStorage'a kaydedilir
if (selectedLanguage) {
    loadLanguage(selectedLanguage);
} else {
    loadLanguage('de'); // Varsayılan olarak Türkçe yüklenir
}

// Dil seçimi için butonları dinleyelim
document.getElementById('englishBtn').addEventListener('click', function() {
    loadLanguage('en');
});

document.getElementById('turkishBtn').addEventListener('click', function() {
    loadLanguage('tr');
});

document.getElementById('germanBtn').addEventListener('click', function() {
    loadLanguage('de');
});

// Dil seçildiğinde ilgili dil dosyasını yükleyen fonksiyon
function loadLanguage(language) {
    // Dil seçimini localStorage'a kaydedelim
    localStorage.setItem('language', language);
    
    // Dil dosyasını yükleyelim
    fetch('lang.json')
        .then(response => response.json())
        .then(data => {
            // İlgili dilin karşılıklarını eşleştirelim ve HTML'e yerleştirelim
            document.getElementById('greeting').textContent = data.greeting[language];
            document.getElementById('greetingIki').textContent = data.greetingIki[language];
            document.getElementById('greetingUc').textContent = data.greetingUc[language];
            document.getElementById('home').textContent = data.home[language];
            document.getElementById('about').textContent = data.about[language];
            document.getElementById('services').textContent = data.services[language];
            document.getElementById('projects').textContent = data.projects[language];
            document.getElementById('contact').textContent = data.contact[language];
        });
}