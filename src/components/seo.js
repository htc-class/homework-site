import React from "react"
import Helmet from "react-helmet"

function SEO({ title = "HTC Homework" }) {
  return (
    <Helmet
      htmlAttributes={{
        lang: "en",
      }}
      title={title}
      titleTemplate={`%s | HTC`}
    >
      <link
        href="https://fonts.googleapis.com/css?family=Lato&display=swap"
        rel="stylesheet"
      ></link>
    </Helmet>
  )
}

export default SEO
