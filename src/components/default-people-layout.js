import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"
import { primaryNav, footerItems } from "../config/options"
import AppShell from "./atomic/AppShell"
import PeopleCard from "./atomic/PeopleCard"

const shortcodes = { Link }

export default function PageTemplate({ data: { mdx },children }) {
  const { name, role, url } = mdx.frontmatter
  return (
    <AppShell
      headerLabel={mdx.frontmatter.name}
      footerItems={footerItems}
      primaryNav={primaryNav}
      expandCenter={true}
      isMDXPage={true}
    >
      <MDXProvider components={shortcodes}>
        <PeopleCard name={name} role={role} url={url} />
        {/* <MDXRenderer frontmatter={mdx.frontmatter}>{mdx.body}</MDXRenderer> */}
        {children}
      </MDXProvider>
    </AppShell>
  )
}
export const pageQuery = graphql`
  query PeopleQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        name
        role
        url
        avatar
        projects
      }
    }
  }
`
