/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const path = require(`path`);
module.exports = {
  siteMetadata: {
    title: 'WebDev Portfolio',
    description: 'This is WebDev Portfolio Site',
    author: '@webdev',
    twitterUsername: '@john_smilga',
    image: '/twitter-img.png',
    siteUrl: 'https://testing-strapi-gatsby-build.netlify.app',
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: path.join(__dirname, `src`, `assets`),
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337/api`,
        queryLimit: 1000, // Default to 100
        //   collectionTypes : `jobs`, `projects`, `blogs`,
        //   singleType : `about`
        //  ONLY ADD TO ARRAY IF YOU HAVE DATA IN STRAPI !!!!
        collectionTypes: [
          {
            name: `jobs`,
            endpoint: `jobs?populate=*`,
          },
        ],
        singleTypes: [],
      },
    },
    // {
    //   resolve: `gatsby-plugin-webfonts`,
    //   options: {
    //     fonts: {
    //       google: [
    //         {
    //           family: "Roboto",
    //           variants: ["400", "700"],
    //         },
    //         { family: "Open Sans" },
    //       ],
    //     },
    //   },
    // },
  ],
};
