import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/aceternity/bentoGrids";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
} from "@tabler/icons-react";
import pac from "/public/images/portrait-professional-elegant-businessman.jpg";
import indoor from "/public/images/medium-shot-man-working-as-lawyer.jpg";
import last from "/public/images/black-men-cafe-have-business.jpg";
export function BentoGridSecondDemo() {
  return (
    <BentoGrid className="mx-auto w-full rounded-lg bg-white p-2 md:max-w-4xl md:auto-rows-[22rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
          icon={item.icon}
          href={item.href}
          image={item.image}
        />
      ))}
    </BentoGrid>
  );
}

const Skeleton = () => (
  <div className="dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex h-full min-h-[6rem] w-full flex-1 rounded-xl border border-transparent bg-neutral-100 [mask-image:radial-gradient(ellipse_at_center,white,transparent)] dark:border-white/[0.2] dark:bg-black"></div>
);

const items = [
  {
    title: "Enetworks Staff",
    description: "Apply to be an official Enetworks staff",
    header: <Skeleton />,
    className: "md:col-span-1 border border-black",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    href: "/apply/openings/staff/categories",
    image: {
      src: pac.src,
      alt: "Portrait of professional elegant businessman",
    },
  },
  {
    title: "Referred Field Officer Position",
    description:
      "Were you nominated as a field officer for Enetworks? Apply here.",
    header: <Skeleton />,
    className: "md:col-span-1 border border-black",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    href: "/apply/openings/referred-field-officer/application",
    image: {
      src: last.src,
      alt: "Medium shot man posing indoors",
    },
  },
  {
    title: "Field Officer Position",
    description: "Apply to be a field officer for Enetworks",
    header: <Skeleton />,
    className: "md:col-span-1 border border-black",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    href: "/apply/openings/field-officer/application",
    image: {
      src: indoor.src,
      alt: "Portrait of 2 professional staffs",
    },
  },
];
