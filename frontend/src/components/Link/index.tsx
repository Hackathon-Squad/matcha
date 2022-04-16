import { type AnchorHTMLAttributes } from "react"
import NextLink from "next/link"

type LinkType = 'hash' | 'internal' | 'external'

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
}

const hashRegex = /^#/
const externalRegex = /^(http|mailto)/i

const Link = ({
  href,
  ...props
}: LinkProps): JSX.Element => {
  const { target, rel } = props

  const linkType: LinkType = (
    hashRegex.test(href) ? 'hash'
    : externalRegex.test(href) ? 'external'
    : 'internal'
  )

  const resolvedTarget = target ?? ((linkType === 'external') ? '_blank' : undefined)
  const sanitizedRel = (resolvedTarget === '_blank') ? 'noopener noreferrer' : rel

  return linkType === 'internal' ? (
    <NextLink href={href}>
      <a target={resolvedTarget} rel={sanitizedRel} {...props} />
    </NextLink>
  ) : (
    <a href={href} target={resolvedTarget} rel={sanitizedRel} {...props} />
  )
}

export default Link
