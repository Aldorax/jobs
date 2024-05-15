import { Button } from "@/components/button/index";
import { Card } from "@/components/card";
import { TextsProvider } from "@/translation";
import Image from "next/image";

export default function Home() {
  const texts = TextsProvider.get();

  return (
    <main className="">
      {/* <Header /> */}
      <section className="mx-6 border-b border-gray-850 py-18 text-center md:mx-28 md:flex md:justify-between md:py-28 md:text-start">
        <div className="flex flex-col items-center gap-4 md:place-items-start">
          <h1 className="max-w-[602px] text-4.5xl font-bold text-black md:mt-9 md:text-5.5xl">
            {texts.FIRST_S_TITLE}
            <span className="text-primary-orange-light">
              {" "}
              {texts.FIRST_S_AUX_TITLE}.{" "}
            </span>
          </h1>
          <p className="mb-4 max-w-[492px] md:text-1.5xl">
            {texts.FIRST_S_SUB}
          </p>
          <Button>{texts.APPLY}</Button>
        </div>
        <div className="flex flex-col justify-center gap-5 overflow-hidden pt-18 sm:flex-row md:justify-normal md:pl-4 md:pt-0">
          <Image
            priority
            alt="woman"
            width={480}
            height={636}
            src="images/desktop_main_img.svg"
            className="hidden sm:block"
          />
          <Image
            alt="woman_aux"
            width={91}
            height={636}
            src="images/desktop_aux_img.svg"
            className="hidden sm:block"
          />
          <Image
            priority
            alt="woman"
            width={640}
            height={640}
            src="images/mobile_main_img.svg"
            className="sm:hidden"
          />
          <Image
            alt="woman_aux"
            width={640}
            height={200}
            src="images/mobile_aux_img.svg"
            className="sm:hidden"
          />
        </div>
      </section>
      <section className="mx-6 grid gap-16 border-b border-gray-850 py-18 md:mx-28 md:py-28">
        <div className="flex flex-col justify-between gap-4 text-center lg:flex-row lg:gap-0 lg:text-start">
          <h2 className="track max-w-2xl text-3xl font-bold text-black md:text-4.5xl">
            {texts.SECOND_S_TITLE}
          </h2>
        </div>
        <div className="flex flex-col items-center gap-16 lg:flex-row lg:items-start lg:justify-between lg:gap-0">
          <Card
            src="images/user.svg"
            title={texts.CARD_1_TITLE}
            text={texts.CARD_1_TEXT}
          />
          <Card
            src="images/wallet.svg"
            title={texts.CARD_2_TITLE}
            text={texts.CARD_2_TEXT}
          />
          <Card
            src="images/checked.svg"
            title={texts.CARD_3_TITLE}
            text={texts.CARD_3_TEXT}
          />
          <Card
            src="images/boost.svg"
            title={texts.CARD_4_TITLE}
            text={texts.CARD_4_TEXT}
          />
        </div>
      </section>
      <footer className="mx-6 py-18 md:mx-28 md:py-28">
        <div className="bg-primary-orange-light-light grid place-items-center gap-6 rounded-xl py-18 text-center md:py-20">
          <div className="grid place-items-center gap-2 md:gap-4">
            <h2 className="max-w-3xl text-3xl font-bold text-black md:text-4.5xl">
              {texts.THIRD_S_TITLE}
            </h2>
          </div>
          <Button>{texts.APPLY}</Button>
        </div>
      </footer>
    </main>
  );
}
