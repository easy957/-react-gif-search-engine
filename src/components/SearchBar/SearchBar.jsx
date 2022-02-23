import { useEffect, useRef, useState } from 'react';

export default function SearchBar({ onQueryChange }) {
  const [query, setQuery] = useState('');
  const previousQuery = useRef(query);

  useEffect(() => {
    if (previousQuery.current !== query) {
      onQueryChange(query);
    }
    previousQuery.current = query;
  }, [onQueryChange, query]);

  return (
    <div className="search">
      <input
        placeholder="Enter text to search for gifs!"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
    </div>
  );
}
