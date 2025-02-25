import Image from "next/image";
import React from "react";
import { client, urlFor } from "../lib/sanity";
import Link from "next/link";

async function getData() {
  const query = "*[_type == 'heroImage'][0]";
  const data = await client.fetch(query);
  return data;
}

export default async function Hero() {
  const data = await getData();
  return (
    <main className="mx-auto max-w-2xl px-4 sm:pb-6 lg:max-w-7xl lg:px-8">
      <div className="mb-8 flex flex-wrap justify-between md:mb-16">
        <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48">
          <h1 className="mb-4 text-4xl font-bold text-black sm:text-3xl md:mb-8 md:text-6xl">
          Elevate Your <span className="text-primary"> Style </span> with Exclusive Fashion
          </h1>
          <p className="max-w-md leading-relaxed text-gray-500 xl:text-lg">
          Discover the Finest Selection of Premium Quality Apparel and Accessories. Shop the Best 
          in Fashion and Experience Unmatched Elegance Today!
          </p>
        </div>
        <div className="mb-12 flex w-full md:mb-16 lg:w-2/3">
          <div className="relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-8">
            <Image
              src={urlFor(data.image2).url()}
              alt="Great Photo"
              width={500}
              height={500}
              priority
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg">
            <Image
              src={urlFor(data.image1).url()}
              alt="Great Photo"
              width={500}
              height={500}
              priority
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between gap-8 md:flex-row">
        <div className="flex h-12 w-64 divide-x overflow-hidden rounded-lg border">
          <Link
            href="/Men"
            className="hover:bg-primary hover:text-white flex w-1/3 items-center justify-center
                text-gray-500 trasition duraton-100 active:bg-primary active:text-white 
                " 
          >
            Men
          </Link>
          <Link
            href="/Women"
            className="hover:bg-primary hover:text-white flex w-1/3 items-center justify-center
                text-gray-500 trasition duraton-100 active:bg-primary active:text-white 
                " 
          >
            Women
          </Link>
          <Link
            href="/Teens"
            className="hover:bg-primary hover:text-white flex w-1/3 items-center justify-center
                text-gray-500 trasition duraton-100 active:bg-primary active:text-white 
                " 
          >
            Teens
          </Link>
        </div>
      </div>
    </main>
  );
}
