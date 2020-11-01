import React from 'react'
import slackIcon from '../../images/icon-slack.png'

import * as S from './styles'

export interface Props {
  title: string
  description: string
  cover: string
  slackLink: string
}

const PaneVolunteer: React.FC<Props> = ({
  title,
  description,
  cover,
  slackLink,
}) => (
  <S.Card>
    <S.Cover url={cover} />
    <S.Content>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <a href={slackLink}>
        <img src={slackIcon} alt="slack icon" /> Přidat se do Slacku
      </a>
    </S.Content>
  </S.Card>
)

export default PaneVolunteer
