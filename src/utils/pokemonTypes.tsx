import {
  FaFire, FaTint, FaLeaf, FaBolt, FaBug, FaGhost, FaSnowflake,
  FaFistRaised, FaDragon, FaMoon, FaSkull, FaFeather, FaMountain,
  FaRegCircle, FaEye, FaStar
} from "react-icons/fa";
import { IconType } from "react-icons";

type TypeInfo = {
  border: string; // classe Tailwind para borda
  text: string;   // classe Tailwind para texto
  bg: string;     // classe Tailwind para fundo
  icon: IconType;
};

export const pokemonTypes: Record<string, TypeInfo> = {
  normal:   { border: "border-gray-400", text: "text-gray-800", bg: "bg-gray-400", icon: FaRegCircle },
  fire:     { border: "border-orange-500", text: "text-orange-500", bg: "bg-orange-500", icon: FaFire },
  water:    { border: "border-blue-500", text: "text-blue-500", bg: "bg-blue-500", icon: FaTint },
  grass:    { border: "border-green-600", text: "text-green-600", bg: "bg-green-600", icon: FaLeaf },
  electric: { border: "border-yellow-400", text: "text-yellow-500", bg: "bg-yellow-400", icon: FaBolt },
  ice:      { border: "border-cyan-400", text: "text-cyan-600", bg: "bg-cyan-400", icon: FaSnowflake },
  fighting: { border: "border-red-700", text: "text-red-700", bg: "bg-red-700", icon: FaFistRaised },
  poison:   { border: "border-purple-500", text: "text-purple-500", bg: "bg-purple-500", icon: FaSkull },
  ground:   { border: "border-yellow-700", text: "text-yellow-700", bg: "bg-yellow-700", icon: FaMountain },
  flying:   { border: "border-indigo-400", text: "text-indigo-400", bg: "bg-indigo-400", icon: FaFeather },
  psychic:  { border: "border-pink-400", text: "text-pink-500", bg: "bg-pink-400", icon: FaEye },
  bug:      { border: "border-lime-600", text: "text-lime-600", bg: "bg-lime-600", icon: FaBug },
  rock:     { border: "border-yellow-800", text: "text-yellow-800", bg: "bg-yellow-800", icon: FaMountain },
  ghost:    { border: "border-indigo-700", text: "text-indigo-700", bg: "bg-indigo-700", icon: FaGhost },
  dragon:   { border: "border-indigo-900", text: "text-indigo-900", bg: "bg-indigo-900", icon: FaDragon },
  dark:     { border: "border-gray-800", text: "text-gray-800", bg: "bg-gray-800", icon: FaMoon },
  steel:    { border: "border-gray-400", text: "text-gray-500", bg: "bg-gray-400", icon: FaStar },
  fairy:    { border: "border-pink-300", text: "text-pink-500", bg: "bg-pink-300", icon: FaStar },
};