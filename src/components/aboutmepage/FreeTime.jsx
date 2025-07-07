import Image from "next/image";

export default function FreeTime() {
  return (
    <section className="flex flex-row items-center gap-5 mb-40 w-full">
      <article className="w-full lg:w-2/3">
        <h2 className="font-IBMBold text-sub-title-md md:text-sub-title-xl mb-10">
          My Interests
        </h2>
        <div className="font-IBMMedium text-body-md md:text-body-xl">
          <p className="mb-7">
            I enjoy creating efficient, scalable solutions through code, whether 
            it’s building apps that solves real world problems, data pipelines or 
            reinforcement learning agents.
          </p>
          <p>
            Outside of programming, I’m a language enthusiast who speaks English, 
            Chinese, Malay, Cantonese and Japanese, and I enjoy exploring global cultures, 
            watching  anime, and playing strategy games. You'll often find me tucked 
            in a cozy café, reading light novels with a cup of coffee in hand!
          </p>
        </div>
      </article>
      <div className="relative w-1/3 aspect-[4/5] hidden lg:block">
        <Image
          src="/images/Me3.jpg"
          alt="Kelvin outside in the wild again"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{
            objectFit: "cover",
          }}
          placeholder="blur"
          blurDataURL={`${process.env.PLACEHOLDER_BLUR}`}
          className="rounded-lg"
        />
      </div>
    </section>
  );
}
