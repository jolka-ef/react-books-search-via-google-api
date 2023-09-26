export const getExcerpt = (text, wordsMax) => {
    let excerpt = text.split(/\s+/, wordsMax);
    excerpt = excerpt.join(' ');
    if (excerpt) {
        excerpt = excerpt.padEnd(excerpt.length + 6, ' (...)');
    }
    return excerpt ;
}



