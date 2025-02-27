export default function Places({ title, places, fallbackText, onSelectPlace }) {
  return (
    <section className="places-category">
      <h2>{title}</h2>
      {places.length === 0 && <p className="fallback-text">{fallbackText}</p>}
      {places.length > 0 && (
        <ul className="places">
          {places.map((place) =>
            place ? ( // Controlla se place è definito
              <li key={place.id} className="place-item">
                <button onClick={() => onSelectPlace(place.id)}>
                  {place.image?.src && ( // Controlla se l'immagine esiste prima di usarla
                    <img
                      src={place.image.src}
                      alt={place.image.alt || "Place image"}
                    />
                  )}
                  <h3>{place.title}</h3>
                </button>
              </li>
            ) : null
          )}
        </ul>
      )}
    </section>
  );
}
