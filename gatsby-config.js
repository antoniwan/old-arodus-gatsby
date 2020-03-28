module.exports = {
  siteMetadata: {
    title: `Antonio Rodriguez`,
    description: `Fullstack developer, accidental cofounder and manager, living in Miami, Florida. I know what I'm doing 60% of the time.`,
    author: `@antoniwan`,
    siteUrl: `https://antoniorodriguez.us`,
    url: `https://antoniorodriguez.us`,
    image: `/images/picture-flowers.jpg`,
    twitterUsername: `@antoniwan`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        exclude: ["/feed"],
      },
    },
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
