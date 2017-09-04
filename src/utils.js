export const formatBookResults = results => 
  results.map(b => ({
    id: b.id,
    title: b.title || '',
    authors: (b.authors || []).reduce((author, acc) => author ? `${acc}, ${author}` : acc, ''),
    coverURL: (b.imageLinks || {}).thumbnail || '',
    shelf: b.shelf || 'none',
  }))