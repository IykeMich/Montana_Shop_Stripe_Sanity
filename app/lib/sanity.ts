import {createClient} from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'


export const client = createClient ({
    projectId: "hpmek1bm",
    dataset: "production",
    apiVersion: "2022-03-25",
    useCdn: true,
});

const builder = imageUrlBuilder(client)


// Original code
// eslint-disable-next-line
export function urlFor(source: any) {
    return builder.image(source)
}

// Modified Code
// type ImageSource = {
//     asset: { _ref: string } | { url: string };
// };

// export function urlFor(source: ImageSource) {
//     return builder.image(source);
// }

