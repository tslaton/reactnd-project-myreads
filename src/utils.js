import _ from 'lodash'

export const formatBookResults = results =>
  _.sortBy(results.map(b => ({
    id: b.id,
    title: b.title || '',
    authors: (b.authors || []).reduce((acc, author) => acc ? `${acc}, ${author}` : author, ''),
    coverURL: (b.imageLinks || {}).thumbnail || '',
    shelf: b.shelf || 'none',
  })), 'title')