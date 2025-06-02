"use client";
import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import clsx from "clsx";
import { FaRegStar, FaStar } from "react-icons/fa";
import { Pokemon } from "../types";
import { pokemonTypes } from "../utils/pokemonTypes";
import { toggleFavorite, getFavorites } from "../utils/pokemonFavs";

type Props = {
  pokemon: Pokemon;
  evolutions: Pokemon[];
};

export default function PokemonCard({
  pokemon,
  evolutions,
}: Props) {
  const [open, setOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(getFavorites().includes(pokemon.name));

  const handleToggleFavorite = () => {
    toggleFavorite(pokemon.name);
    setIsFavorite(getFavorites().includes(pokemon.name));
  };

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <div
          className={clsx(
            "bg-white rounded-xl shadow-md p-4 cursor-pointer transition-transform duration-200 hover:-translate-y-2 hover:shadow-lg flex flex-col items-center group",
            "w-full max-w-xs mx-auto"
          )}
        >
          <img
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            className="w-24 h-24 mb-2"
          />
          <h2 className="text-lg font-bold capitalize flex items-center gap-2">
            {pokemon.name}
            <button
              onClick={e => {
                e.stopPropagation();
                handleToggleFavorite();
              }}
              className="ml-1"
              aria-label={isFavorite ? "Desfavoritar" : "Favoritar"}
              tabIndex={0}
            >
              {isFavorite ? (
                <FaStar className="text-yellow-400 text-lg" />
              ) : (
                <FaRegStar className="text-gray-400 text-lg" />
              )}
            </button>
          </h2>
          <div className="flex gap-2 mt-1 mb-2">
            {pokemon.types.map((t: any) => {
              const typeInfo = pokemonTypes[t.type.name] || pokemonTypes["normal"];
              const Icon = typeInfo.icon;
              return (
                <span
                  key={t.type.name}
                  className={`flex items-center gap-1 text-xs px-2 py-1 rounded capitalize font-semibold ${typeInfo.bg} text-white`}
                >
                  <Icon className="text-base" />
                  {t.type.name}
                </span>
              );
            })}
          </div>
          <button
            className="mt-auto font-semibold cursor-pointer bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              setOpen(true);
            }}
          >
            Ver detalhes
          </button>
        </div>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/40 z-40" />
        <Dialog.Content className="fixed z-50 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl shadow-xl w-full max-w-2xl p-6 max-h-[90vh] overflow-y-auto text-black">
          <Dialog.Title asChild>
            <div className="flex items-center gap-2 mb-2">
              <h1 className="text-2xl font-bold capitalize">{pokemon.name}</h1>
              <button
                onClick={handleToggleFavorite}
                className="ml-2"
                aria-label={isFavorite ? "Desfavoritar" : "Favoritar"}
              >
                {isFavorite ? (
                  <FaStar className="text-yellow-400 text-xl" />
                ) : (
                  <FaRegStar className="text-gray-400 text-xl" />
                )}
              </button>
            </div>
          </Dialog.Title>
          <div className="flex justify-between items-center mb-4">
            <span className="text-gray-500 font-bold text-lg">
              #{pokemon.id.toString().padStart(3, "0")}
            </span>
            <Dialog.Close asChild>
              <button className="text-2xl cursor-pointer font-bold text-gray-400 hover:text-gray-600">
                ×
              </button>
            </Dialog.Close>
          </div>
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <img
              src={
                pokemon.sprites.other?.["official-artwork"]?.front_default ||
                pokemon.sprites.front_default
              }
              alt={pokemon.name}
              className="w-40 h-40 object-contain"
            />
            <div className="flex-1">
              <div className="flex gap-4 mb-2">
                <span className="text-sm text-gray-600">
                  <b>Peso:</b> {(pokemon.weight / 10).toFixed(1)} kg
                </span>
                <span className="text-sm text-gray-600">
                  <b>Altura:</b> {(pokemon.height / 10).toFixed(1)} m
                </span>
              </div>
              <div className="mb-2">
                <b>Habilidades:</b>{" "}
                {pokemon.abilities
                  .map((a: any) =>
                    a.is_hidden
                      ? `${a.ability.name} (Oculta)`
                      : a.ability.name
                  )
                  .join(", ")}
              </div>
              <div className="mb-4">
                <b>Tipo(s):</b>
                <div className="flex gap-2 mt-2">
                  {pokemon.types.map((t: any) => {
                    const typeInfo = pokemonTypes[t.type.name] || pokemonTypes["normal"];
                    const Icon = typeInfo.icon;
                    return (
                      <span key={t.type.name} className={`flex items-center gap-1 text-xs px-2 py-1 rounded capitalize font-semibold ${typeInfo.bg} text-white`}>
                        <Icon className="text-base" />
                        {t.type.name}
                      </span>
                    );
                  })}
                </div>
              </div>
              <div className="mb-4">
                <b>Estatísticas Base</b>
                <div className="space-y-1 mt-2">
                  {pokemon.stats.map((stat: any) => (
                    <div key={stat.stat.name} className="flex items-center gap-2">
                      <span className="w-32 capitalize text-gray-600 font-semibold">
                        {stat.stat.name.replace("special-", "Sp. ")}
                      </span>
                      <div className="flex-1 bg-gray-200 rounded h-2 relative">
                        <div
                          className={
                            clsx("absolute left-0 top-0 h-2 rounded",
                            stat.stat.name === "hp" && "bg-red-400",
                            stat.stat.name === "attack" && "bg-yellow-400",
                            stat.stat.name === "defense" && "bg-blue-400",
                            stat.stat.name === "special-attack" && "bg-purple-400",
                            stat.stat.name === "special-defense" && "bg-purple-300",
                            stat.stat.name === "speed" && "bg-yellow-300"
                          )}
                          style={{
                            width: `${(stat.base_stat / 150) * 100}%`,
                            minWidth: 8,
                          }}
                        />
                      </div>
                      <span className="w-8 text-right text-gray-600 font-semibold">{stat.base_stat}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <b>Cadeia Evolutiva</b>
                <div className="flex gap-4 mt-2 items-center">
                  {evolutions.map((evo) => (
                    <div
                      key={evo.name}
                      className={clsx(
                        "flex flex-col items-center px-2 py-1 rounded transition-all",
                        evo.name === pokemon.name
                          ? "border-2 border-blue-500 bg-blue-50"
                          : "opacity-70"
                      )}
                    >
                      <img
                        src={evo.sprites.front_default}
                        alt={evo.name}
                        className="w-12 h-12"
                      />
                      <span
                        className={clsx(
                          "capitalize text-xs mt-1",
                          evo.name === pokemon.name && "font-bold text-blue-700"
                        )}
                      >
                        {evo.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}