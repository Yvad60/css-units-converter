import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import UnitInput from "../components/ui/UnitInput";
import githubIcon from "/public/icons/github.png";

export default function Home() {
  return (
    <>
      <Head>
        <title>CSS unit converter</title>
        <meta
          name="description"
          content="An easy-to-use converter for different css units"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" /> waq2
      </Head>
      <main>
        <header className="bg-primary_chocolate">
          <div className="flex justify-between px-[8.75rem] py-5 items-center text-primary_light">
            <Link href="/" className="leading-4 text-2xl font-medium">
              CSS Unit Converter
            </Link>
            <Image src={githubIcon} alt="github logo icon" />
          </div>
        </header>
        <section className="bg-primary_light text-primary_chocolate">
          <div className="px-[8.75rem] mt-[1.875rem]">
            <p className="max-w-[26.75rem] text-lg leading-6">
              Enter any unit value below, it will automatically get converted to
              other units
            </p>
            <div className="mt-7 flex justify-between">
              <UnitInput
                label="Pixels"
                name="pixel"
                placeholder="Enter pixels..."
                suffix="px"
              />
              <UnitInput
                label="EM"
                name="em"
                placeholder="Enter em..."
                suffix="em"
              />
              <UnitInput
                label="REM"
                name="REM"
                placeholder="Enter rem..."
                suffix="rem"
              />
              <UnitInput
                label="Points"
                name="point"
                placeholder="Enter points..."
                suffix="pt"
              />
            </div>
            <p className="text-center mt-7 text-lg">
              The root font size is set to 16 pixels
            </p>
            <div className="mt-[58px] flex flex-col gap-7">
              <h4 className="font-semibold text-2xl">
                Understanding CSS Units
              </h4>
              <div>
                <h5 className="font-semibold text-lg leading-6">Pixels</h5>
                <p className="mt-3 text-lg leading-6 text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus maximus elit lacinia semper porta. Sed suscipit
                  vitae purus vel tempor. Nam sit amet maximus diam. Nulla enim
                  est, vehicula vel iaculis nec, efficitur at tellus. Nulla non
                  nibh maximus, sagittis diam id, laoreet libero. Vestibulum
                  posuere risus sit amet enim sodales finibus. Phasellus
                  eleifend, leo sed euismod luctus, diam augue porta libero,
                  vitae blandit arcu mauris id felis. Morbi blandit elit sit
                  amet urna commodo, eu lacinia urna ultrices.
                </p>
              </div>
              <div>
                <h5 className="font-semibold text-lg leading-6">Pixels</h5>
                <p className="mt-3 text-lg leading-6 text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus maximus elit lacinia semper porta. Sed suscipit
                  vitae purus vel tempor. Nam sit amet maximus diam. Nulla enim
                  est, vehicula vel iaculis nec, efficitur at tellus. Nulla non
                  nibh maximus, sagittis diam id, laoreet libero. Vestibulum
                  posuere risus sit amet enim sodales finibus. Phasellus
                  eleifend, leo sed euismod luctus, diam augue porta libero,
                  vitae blandit arcu mauris id felis. Morbi blandit elit sit
                  amet urna commodo, eu lacinia urna ultrices.
                </p>
              </div>
              <div>
                <h5 className="font-semibold text-lg leading-6">Pixels</h5>
                <p className="mt-3 text-lg leading-6 text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus maximus elit lacinia semper porta. Sed suscipit
                  vitae purus vel tempor. Nam sit amet maximus diam. Nulla enim
                  est, vehicula vel iaculis nec, efficitur at tellus. Nulla non
                  nibh maximus, sagittis diam id, laoreet libero. Vestibulum
                  posuere risus sit amet enim sodales finibus. Phasellus
                  eleifend, leo sed euismod luctus, diam augue porta libero,
                  vitae blandit arcu mauris id felis. Morbi blandit elit sit
                  amet urna commodo, eu lacinia urna ultrices.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
