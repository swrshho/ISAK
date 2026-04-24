import { urlFor } from '../lib/sanity/sanityImageUrl'
import type { SanityImageObject } from '@sanity/image-url'

// Use the urlFor function to build URLs
function ImageComponent({ image }: { image: SanityImageObject }) {
    return (
        <img
            src={urlFor(image)
                .width(300)
                .height(200)
                .url()}

        // Depending on your schema, you may need to adjust the alt text location
        // and update types to match your schema.
        // alt={(image.alt) || 'Image'}
        />
    )
}

export default ImageComponent