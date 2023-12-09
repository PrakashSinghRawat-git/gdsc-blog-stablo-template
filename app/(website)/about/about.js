import Container from "@/components/container";
import { urlForImage } from "@/lib/sanity/image";
import Image from "next/image";
import Link from "next/link";

export default function About({ authors }) {
  return (
    <Container>
      <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
        About
      </h1>
      <div className="text-center">
        <p className="text-lg">
          Look at me, in ma eyes. Lookin coo innit?
        </p>
      </div>

      <div className="mb-16 mt-6 grid grid-cols-3 gap-5 md:mb-32 md:mt-16 md:gap-16">
        {authors.slice(0, 3).map(author => {
          const imageProps = urlForImage(author?.image) || null;
          return (
            <div
              key={author._id}
              className="relative aspect-square overflow-hidden rounded-md bg-slate-50 odd:translate-y-10 odd:md:translate-y-16">
              <Link href={`/author/${author?.slug}`}>
                {imageProps && (
                  <Image
                    src={imageProps?.src}
                    alt={author?.name || " "}
                    fill
                    sizes="(max-width: 320px) 100vw, 320px"
                    className="object-cover"
                  />
                )}
              </Link>
            </div>
          );
        })}
      </div>

      <div className="prose mx-auto mt-14 text-center dark:prose-invert">
        <p>this gonna be a loooooooooooooooooooooooong paragraph</p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Maxime suscipit, unde, vitae ipsum assumenda natus cum
          voluptatum provident vero consectetur, architecto excepturi
          perferendis. Velit architecto repudiandae enim assumenda
          dignissimos, dicta rerum laudantium expedita ex. Eveniet
          repellat nulla exercitationem inventore, modi debitis
          consequuntur fugit laborum distinctio ab accusamus veniam
          soluta doloribus.
        </p>
        <p>
          <Link href="/contact">Get in touch</Link>
        </p>
      </div>
    </Container>
  );
}
