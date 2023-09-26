export const buildQuery = (query) => {
  const { langRestrict, ...terms} = query;

  let searchQuery = [];
  for (const [key, value] of Object.entries(terms)) {
    if (value) {
      searchQuery.push(`${key}:${value}`)
    }
  }
  let result = searchQuery.join('+');
  
  if(result && langRestrict)  {
    result += `&langRestrict=${langRestrict}`;
  }

  return result;
};
