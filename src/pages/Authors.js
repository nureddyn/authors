import { useState, useEffect } from "react";

export default function Authors() {
  const [authors, setAuthors] = useState([]);
  const [selectedAuthor, setSelectedAuthor] = useState(null);

  const getAuthors = async (name) => {
    const url = `https://openlibrary.org/search/authors.json?q=${name}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      setAuthors(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getAuthors("");
  }, []);

  const trigger = (e) => {
    getAuthors(e.target.value);
  };

  const showInfo = (author) => {
    // Set the selected author when the button is clicked
    setSelectedAuthor(author);
  };

  const loaded = () => {
    return (
      <ul>
        {authors.docs && Array.isArray(authors.docs) ? (
          authors.docs.map((author) => (
            <li key={author.key}
                onClick={() => showInfo(author)}
                className="author"
                value={author.name}
            >
              {author.name}
            </li>
          ))
        ) : (
          <li>None</li>
        )}
      </ul>
    );
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };

  const authorInfo = () => {
    // Display author's info in the "info" div
    if (selectedAuthor) {
      const infoUrl = `https://openlibrary.org/search/authors.json?q=${selectedAuthor.name}`
      return (
        <div>
          <h2>{selectedAuthor.name}</h2>
          <h3>Birth date:</h3>
          <p>{selectedAuthor.birth_date}</p>
          <h3>Top Work:</h3>
          <p>{selectedAuthor.top_work}</p>
        </div>
      );
    }
  };

  return (
    <>
      <div className="search">
        <h2>Find an author and their info</h2>
        <form>
          <input name="author" type="text" onInput={trigger} />
        </form>
      </div>
      <div className="results">{authors ? loaded() : loading()}</div>
      <div className="info">{authorInfo()}</div>
    </>
  );
}
