import accepts from 'accepts';
import messages from '../lang';
const supportedLanguages = ['en', 'ru', 'it'];

const getMessages = (req) => {
  const accept = accepts(req);
  const locale = accept.language(supportedLanguages) || 'en';
  req.locale = locale;
  return { locale, messages: messages[locale] };
};

export default getMessages;
