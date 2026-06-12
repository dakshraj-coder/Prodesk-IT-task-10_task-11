"use client";

import { useMemo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/cartSlice";
import { setCategory } from "../store/filterSlice";
import { toggleTheme } from "../store/themeSlice";
import { RootState } from "../store/store";

const movies = [
  {
    id: 1,
    title: "Avengers endgame",
    category: "Action",
    image: "https://i.etsystatic.com/12729518/r/il/7e8166/1996409065/il_570xN.1996409065_pbs3.jpg",
  },
  {
    id: 2,
    title: "Batman",
    category: "Action",
    image: "https://m.media-amazon.com/images/I/51LZjVjpTjL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: 3,
    title: "Titanic",
    category: "Drama",
    image: "https://www.originalfilmart.com/cdn/shop/products/titanic_1997_original_film_art_713cc08c-5fe2-49d1-bd32-51a1d5890d43_5000x.jpg?v=1675533926",
  },
  {
    id: 4,
    title: "Joker",
    category: "Drama",
    image: "https://m.media-amazon.com/images/I/81V0EHAIX+L._AC_UF894,1000_QL80_.jpg",
  },
];

export default function Home() {
  const dispatch = useDispatch();

  const theme = useSelector(
    (state: RootState) => state.theme.mode
  );

  const category = useSelector(
    (state: RootState) => state.filters.category
  );

  const cartItems = useSelector(
    (state: RootState) => state.cart.items
  );

  const handleAddToFavorites = useCallback(
    (movie: {
      id: number;
      title: string;
      category: string;
    }) => {
      dispatch(addToCart(movie));
    },
    [dispatch]
  );

  const filteredMovies = useMemo(() => {
    return movies.filter(
      (movie) =>
        category === "All" ||
        movie.category === category
    );
  }, [category]);

  return (
    <div
      style={{
        padding: "30px",
        minHeight: "100vh",
        backgroundColor: theme === "dark" ? "#111" : "#f5f5f5",
        color: theme === "dark" ? "white" : "black",
        transition: "all 0.3s ease",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        🎬 Movie App with Redux
      </h1>

      <button
  onClick={() => dispatch(toggleTheme())}
  style={{
    backgroundColor: theme === "dark" ? "#fbbf24" : "#1f2937",
    color: theme === "dark" ? "#000" : "#fff",
    border: "none",
    padding: "12px 20px",
    borderRadius: "10px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
    marginBottom: "15px",
    transition: "0.3s ease",
  }}
>
  {theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode"}
</button>

      <h3>Current Theme: {theme}</h3>

      <h2>❤️ Favorites: {cartItems.length}</h2>

      <div
  style={{
    marginTop: "15px",
    marginBottom: "20px",
  }}
>
  <h3>Favorite Movies</h3>

  {cartItems.length === 0 ? (
    <p>No favorites added yet.</p>
  ) : (
    <ul>
      {cartItems.map((movie: any, index: number) => (
        <li key={index}>{movie.title}</li>
      ))}
    </ul>
  )}
</div>

      <div
  style={{
    display: "flex",
    gap: "12px",
    marginBottom: "25px",
    flexWrap: "wrap",
  }}
>
  {["All", "Action", "Drama"].map((genre) => (
    <button
      key={genre}
      onClick={() => dispatch(setCategory(genre))}
      style={{
        padding: "10px 15px",
        borderRadius: "25px",
        border: "none",
        cursor: "pointer",
        fontWeight: "bold",
        transition: "0.3s",
        backgroundColor:
          category === genre
            ? "#2563eb"
            : theme === "dark"
            ? "#374151"
            : "#e5e7eb",
        color:
          category === genre
            ? "white"
            : theme === "dark"
            ? "white"
            : "black",
      }}
    >
      {genre}
    </button>
  ))}
</div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:"repeat(auto-fit, minmax(250px, 300px))",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        {filteredMovies.map((movie) => (
          <div
            key={movie.id}
            style={{
              border: "1px solid gray",
              borderRadius: "12px",
              padding: "10px",
              backgroundColor:
                theme === "dark" ? "#222" : "white",
              boxShadow:
                "0 4px 8px rgba(0,0,0,0.1)",
            }}
          >
            <h3>{movie.title}</h3>
            <p>{movie.category}</p>

            <img
            src={movie.image}
            alt={movie.title}
            style={{
              width: "100%",
              height: "220px",
              borderRadius: "10px",
              marginBottom: "10px",
              }}
            /> 

            <h3>{movie.title}</h3>

            <button
            onClick={() => handleAddToFavorites(movie)}
             style={{
              backgroundColor: "#e11d48",
              color: "white",
              border: "none",
              padding: "12px 20px",
              borderRadius: "10px",
              cursor: "pointer",
              fontSize: "16px",
              fontWeight: "bold",
              width: "100%",
              marginTop: "10px",
              transition: "0.3s",
  }
}
>
  ❤️ Add To Favorites
</button>
          </div>
        ))}
      </div>
    </div>
  );
}