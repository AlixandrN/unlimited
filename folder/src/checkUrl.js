export const checkUrl = () => {
  let langFromURL = window.location.search.replace('?', '').split('=')[1];
  if (langFromURL) {
    return langFromURL;
  } else if (navigator) {
    if (navigator.language) {
      return navigator.language;
    } else if (navigator.browserLanguage) {
      return navigator.browserLanguage;
    } else if (navigator.systemLanguage) {
      return navigator.systemLanguage;
    } else if (navigator.userLanguage) {
      return navigator.userLanguage;
    }
  }
  return 'en';
};
