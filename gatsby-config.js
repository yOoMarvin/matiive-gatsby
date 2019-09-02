/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'material icons'
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-102590355-2",
        anonymize: true,
      },
    }
  ],
}
