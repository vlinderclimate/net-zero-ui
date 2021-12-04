/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { fontWeight } from "../theme/typography"

import ModeratEot from "../fonts/moderat/Moderat-Regular.eot"
import ModeratWoff2 from "../fonts/moderat/Moderat-Regular.woff2"
import ModeratWoff from "../fonts/moderat/Moderat-Regular.woff"
import ModeratMediumEot from "../fonts/moderat/Moderat-Medium.eot"
import ModeratMediumWoff2 from "../fonts/moderat/Moderat-Medium.woff2"
import ModeratMediumWoff from "../fonts/moderat/Moderat-Medium.woff"
import ModeratBoldEot from "../fonts/moderat/Moderat-Bold.eot"
import ModeratBoldWoff2 from "../fonts/moderat/Moderat-Bold.woff2"
import ModeratBoldWoff from "../fonts/moderat/Moderat-Bold.woff"
import ModeratBlackEot from "../fonts/moderat/Moderat-Black.eot"
import ModeratBlackWoff2 from "../fonts/moderat/Moderat-Black.woff2"
import ModeratBlackWoff from "../fonts/moderat/Moderat-Black.woff"

export const regularFonts = `
  @font-face {
    font-family: "Moderat";
    font-style: normal;
    font-weight: ${fontWeight.normal};
    src: url(${ModeratEot}),
        url(${ModeratEot}?#iefix) format('embedded-opentype'),
        url(${ModeratWoff2}) format('woff2'),
        url(${ModeratWoff}) format('woff')
  }
  @font-face {
    font-family: "Moderat";
    font-style: normal;
    font-weight: ${fontWeight.medium};
    src: url(${ModeratMediumEot}),
        url(${ModeratMediumEot}?#iefix) format('embedded-opentype'),
        url(${ModeratMediumWoff2}) format('woff2'),
        url(${ModeratMediumWoff}) format('woff')
  }
  @font-face  {
    font-family: "Moderat";
    font-style: normal;
    font-weight: ${fontWeight.bold};
    src: url(${ModeratBoldEot}),
        url(${ModeratBoldEot}?#iefix) format('embedded-opentype'),
        url(${ModeratBoldWoff2}) format('woff2'),
        url(${ModeratBoldWoff}) format('woff')
  }
  @font-face {
    font-family: "Moderat";
    font-style: normal;
    font-weight: ${fontWeight.black};
    src: url(${ModeratBlackEot}),
        url(${ModeratBlackEot}?#iefix) format('embedded-opentype'),
        url(${ModeratBlackWoff2}) format('woff2'),
        url(${ModeratBlackWoff}) format('woff')
  }

  .MuiTouchRipple-root {
    display: none !important;
  }
`

const MuiCssBaseLine = `
  ${regularFonts};
`

export default MuiCssBaseLine
