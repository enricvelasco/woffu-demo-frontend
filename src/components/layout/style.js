import styled from 'styled-components'
import { mediaQueries } from '@Styles/config/media-queries'
import { colors } from '@Styles/config/colors'

const maxWidth = 960

export const Container = styled.div`
  background-color: ${colors.backgoundColorLight};
  margin: 40px auto 20px auto;
  width: 100%;
  padding: 8px 0;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  ${mediaQueries.desktop} {
    max-width: ${maxWidth}px;
  }
`
