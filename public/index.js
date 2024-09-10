const translateHandler = async () => {
  const textArea = document.getElementById('text-input');
  const localeArea = document.getElementById('locale-select');
  const errorArea = document.getElementById('error-msg');
  const translatedArea = document.getElementById('translated-sentence');

  errorArea.innerText = '';
  translatedArea.innerText = '';

  console.log('Sending text for translation:', textArea.value); // Log the input text
  console.log('Locale selected:', localeArea.value); // Log the selected locale

  const data = await fetch('/api/translate', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ text: textArea.value, locale: localeArea.value }),
  });

  const parsed = await data.json();

  console.log('Translation response:', parsed); // Log the response from the server

  if (parsed.error) {
    errorArea.innerText = JSON.stringify(parsed);
    return;
  }

  translatedArea.innerHTML = parsed.translation;
  return;
};

document
  .getElementById('translate-btn')
  .addEventListener('click', translateHandler);
