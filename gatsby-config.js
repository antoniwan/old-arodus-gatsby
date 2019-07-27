module.exports = {
  siteMetadata: {
    title: `antoniorodriguez.us`,
    description: `Software engineer living in Miami, Florida. Knows what he's doing 60% the time. Will work for food.`,
    author: `@antoniwan`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-49026829-1",
        anonymize: true,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Antonio Rodriguez`,
        short_name: `arod.us`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#eb5854`,
        display: `minimal-ui`,
        icon: `src/images/arod-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
