export const colorBadge = (typePokemon: string) => {
  switch (typePokemon) {
    case "Fire":
      return "#F39D40";
    case "Grass":
      return "#64A30A";
    case "Poison":
      return "#9267AF";
    case "Flying":
      return "#ABC8FF";

    default:
      return "#566CD6";
  }
};
