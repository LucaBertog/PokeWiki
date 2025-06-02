export function getFavorites(): string[] {
  if (typeof window === "undefined") return [];
  return JSON.parse(localStorage.getItem("favorites") || "[]");
}

export function setFavorites(favorites: string[]) {
  localStorage.setItem("favorites", JSON.stringify(favorites));
}

export function toggleFavorite(name: string) {
  const favorites = getFavorites();
  if (favorites.includes(name)) {
    setFavorites(favorites.filter((n) => n !== name));
  } else {
    setFavorites([...favorites, name]);
  }
}