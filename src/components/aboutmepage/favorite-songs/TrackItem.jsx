import Image from "next/image";

export default function TrackItem({ song }) {
  return (
    <li className="flex w-auto justify-between items-center max-h-[70px] bg-white bg-opacity-50 p-2 rounded-md">
      <div className="flex">
        <div className="mr-3 w-[45px] md:min-w-[60px]">
          <Image
            src={song.albumImageDest}
            alt={`Album image of ${song.title} by ${song.artist}`}
            width={60}
            height={60}
            placeholder="blur"
            blurDataURL={`${process.env.PLACEHOLDER_BLUR}`}
          />
        </div>
        <div className="flex flex-col items-start">
          <p className="font-IBMMedium text-body-md md:text-body-xl whitespace-nowrap">
            {song.title}
          </p>
          <small className="font-IBMMedium text-small-md md:text-small-xl  whitespace-nowrap">
            {song.artist}
          </small>
        </div>
      </div>
      <nav className="flex gap-3">
        <a
          href={`${song.youtubeUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:brightness-75 md:min-w-[42px] w-[32px]"
        >
          <Image
            src="/images/icons/youtube.png"
            alt="Youtube icon"
            width={42}
            height={42}
            placeholder="blur"
            blurDataURL={`${process.env.PLACEHOLDER_BLUR}`}
          />
        </a>
        <a
          href={`${song.spotifyUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:brightness-75  md:min-w-[42px] w-[32px]"
        >
          <Image
            src="/images/icons/spotify.png"
            alt="Spotify icon"
            width={42}
            height={42}
            placeholder="blur"
            blurDataURL={`${process.env.PLACEHOLDER_BLUR}`}
          />
        </a>
      </nav>
    </li>
  );
}


