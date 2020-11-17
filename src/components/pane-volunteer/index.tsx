import React from 'react'
import ButtonAsLink from '../links/button-as-link'
import slackIcon from '../../images/icon-slack.png'

import * as S from './styles'

export interface Props {
  title: string
  description: string
  cover: string
  slackLink: string
}

/**
 * TODO: responsive, button color
 */

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
      <ButtonAsLink inverted to={slackLink}>
        <S.Icon src={slackIcon} alt="Slack icon" /> Přidat se do Slacku
      </ButtonAsLink>
    </S.Content>
  </S.Card>
)

export default PaneVolunteer
