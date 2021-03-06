import React from "react"
import presets, { colors, space, radii, breakpoints } from "../utils/presets"
import { rhythm } from "../utils/typography"

const superHeaderTitles = [
  `Feature`,
  `Gatsby`,
  `Static site gens`,
  `CMS`,
  `Site builders`,
]

const superHeader = () => (
  <tr>
    {superHeaderTitles.map((header, i) => (
      <td
        key={i}
        css={{
          "&&": {
            padding: `${rhythm(space[3])} ${rhythm(space[3])} ${rhythm(3 / 8)}`,
          },
          display: `none`,
          textTransform: `uppercase`,
          fontSize: presets.scale[0],
          lineHeight: presets.lineHeights.solid,
          fontWeight: 500,
          textAlign: `center`,
          verticalAlign: `bottom`,
          width: i === 0 ? 120 : `inherit`,
          border: 0,
          color: colors.gray.calm,
          background: colors.ui.whisper,
          "span:first-of-type": {
            borderTopLeftRadius: radii[2],
            textAlign: `left`,
          },
          "&:last-child": {
            borderTopRightRadius: radii[2],
          },
          [breakpoints.xs]: {
            display: `table-cell`,
            width: 125,
          },
          [breakpoints.md]: {
            width: 150,
          },
          [breakpoints.lg]: {
            width: 175,
          },
        }}
      >
        <span
          css={{
            WebkitHyphens: `auto`,
            MsHyphens: `auto`,
            hyphens: `auto`,
            display: `inline-block`,
          }}
        >
          {header}
        </span>
      </td>
    ))}
  </tr>
)

export default superHeader
