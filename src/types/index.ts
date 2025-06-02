export type Pokemon = {
  id: number;
  name: string;
  weight: number;
  height: number;
  abilities: {
    ability: { name: string };
    is_hidden: boolean;
  }[];
  types: {
    slot: number;
    type: { name: string };
  }[];
  stats: {
    base_stat: number;
    stat: { name: string };
  }[];
  sprites: {
    front_default: string;
    other?: {
      ["official-artwork"]?: {
        front_default: string;
      };
    };
  };
};