import asianLofiHipHop from "../../../../public/data/songs/city-pop.json";
import indiePop from "../../../../public/data/songs/japanese-music.json";
import jazzyFunkyStuff from "../../../../public/data/songs/korean-ballad.json";
import slowcore from "../../../../public/data/songs/international-rnb.json";
import GenreRec from "./GenreRec";

export default function FavoriteSongs() {
  return (
    <main className="flex flex-col justify-center items-center w-full">
      <h2 className="text-sub-title-md md:text-sub-title-xl font-IBMBold w-full mb-10">
        Here are some of my favorite songs
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
        <GenreRec
          genreTitle="City Pop"
          songsData={asianLofiHipHop}
          gradientUrl={"/images/songs/city-pop/gradient.jpg"}
        />
        <GenreRec
          genreTitle="Japanese Music"
          songsData={indiePop}
          gradientUrl={"/images/songs/jp-music/gradient.jpg"}
        />
        <GenreRec
          genreTitle="International R&B"
          songsData={slowcore}a
          gradientUrl={"/images/songs/international-r&b/gradient.jpg"}
        />
        <GenreRec
          genreTitle="Korean Ballad"
          songsData={jazzyFunkyStuff}
          gradientUrl={"/images/songs/korean-ballad/gradient.jpg"}
        />
      </div>
    </main>
  );
}
