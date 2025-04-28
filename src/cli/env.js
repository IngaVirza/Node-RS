const parseRSS = () => {
  process.env.RSS_Belarus = 'Belarusians are the BEST';
  const rssEnv = Object.entries(process.env)

    .filter(([key, _]) => key.startsWith('RSS_'))
    .map(([key, value]) => `${key}=${value}`)
    .join(';');
  console.log(rssEnv);
};
parseRSS();
