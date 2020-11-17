import styled from 'styled-components'

export const Card = styled.section`
  max-width: 768px;
  border-radius: ${({ theme }) => theme.borderRadius.base}px;
  overflow: hidden;
`

export const Cover = styled.div<{ url: string }>`
  height: 287px;
  width: 100%;
  background-image: url(${({ url }) => url});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`

export const Content = styled.div`
  padding: ${({ theme }) => theme.space.lg}px;
  padding-top: 30px;
  background-color: ${({ theme }) => theme.colors.darkGrey};
  color: ${({ theme }) => theme.colors.pebble};
`

export const Title = styled.h1`
  font-size: 32px;
  font-weight: ${({ theme }) => theme.fontWeights.heading};
  line-height: 130%;
  margin: 0;
`

export const Description = styled.p`
  margin: 10px 0 38px;
  font-weight: ${({ theme }) => theme.fontWeights.body};
  font-size: ${({ theme }) => theme.fontSizes.base}px;
  line-height: 150%;
  max-width: 36em;
`
export const Icon = styled.img`
  margin-right: 10px;
`
