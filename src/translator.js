const dictionary = {
  'фунция': 'function',
  'если': 'if',
  'иначе': 'else',
  'возврат': 'return',
  'константа': 'const',
  'вывод': 'console.log',
  'цикл': 'for',
  'пока': 'while',
  'пусть': 'let'
};

export function translateRuToEn(text) {
  if (!text) return '';
  let translated = text;
  Object.keys(dictionary).forEach(key => {
    const regex = new RegExp(key, 'g');
    translated = translated.replace(regex, dictionary[key]);
  });
  return translated;
}