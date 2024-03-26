import {
  BackButton,
  CardImgPokemon,
  CardInfoPokemon,
  Search,
} from "@/components";
import DashBoardLayout from "../layout";

export default function PokemonDetailPage() {
  return (
    <DashBoardLayout>
      <section className="p-8">
        <BackButton />
        <Search />
        <div className="flex flex-col lg:flex-row gap-6 mt-12">
          <CardImgPokemon />
          <CardInfoPokemon />
        </div>
      </section>
    </DashBoardLayout>
  );
}
