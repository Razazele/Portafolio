import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const  client = sanityClient({
    projectId:'6cnpq42p',
    dataset:'production',
    apiVersion:'2022-02-01',
    useCdn:true,
    token:process.env.REACT_APP_SANITY_PROJECT_ID
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source)