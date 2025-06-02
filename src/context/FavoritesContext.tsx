"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';

type FavoritesContextType = {
  favorites: string[];
  addFavorite: (name: string) => void;
  removeFavorite: (name: string) => void;
};

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const FavoritesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [favorites, setFavorites] = useState<string[]>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('favorites');
      return stored ? JSON.parse(stored) : [];
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (name: string) => {
    setFavorites((prev) => (prev.includes(name) ? prev : [...prev, name]));
  };

  const removeFavorite = (name: string) => {
    setFavorites((prev) => prev.filter((fav) => fav !== name));
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) throw new Error('useFavorites must be used within a FavoritesProvider');
  return context;
};