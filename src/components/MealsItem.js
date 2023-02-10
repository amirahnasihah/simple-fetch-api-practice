const MealsItem = ({ item }) => {
  const { albumId, title, url, thumbnailUrl } = item;

  return (
    <div className="App">
      <div>
        <h4>{title}</h4>
        <img src={thumbnailUrl} alt="img" />
        <div>
          <a href={url} target="_blank" rel="noreferrer" className="link">
            <span role="img" aria-label="emoji">
              👉
            </span>{" "}
            {url}
          </a>
        </div>
        <p>RM{albumId}</p>
      </div>
      <div>
        <button type="submit">add</button>
      </div>
      <hr />
    </div>
  );
};
export default MealsItem;
