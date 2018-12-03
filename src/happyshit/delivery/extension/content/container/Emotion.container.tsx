import React, { useEffect, useState } from 'react'
import { Dislike } from '../components/Dislike.component'
import { bindDependencies } from '../../../../../arch/bindDependencies'
import { EmotionsCanBeUpdatedUseCase } from '../../../../domain/useCases/emotions/EmotionsCanBeUpdated.useCase'
import { TYPES } from '../../../../../arch/types'
import { useProxy } from '../../../../../arch/delivery/hooks/useProxy'
import { Emotion as EmotionEntity } from '../../../../domain/entities/Emotion.entity'
import { EmotionType } from '../../../../domain/valueObjects/EmotionType'
import { Count } from '../../../../domain/valueObjects/Count'
import { EmotionsListUseCase } from '../../../../domain/useCases/emotions/EmotionsList.useCase'

const Emotion = (
  _emotionsCanBeUpdatedUseCase: EmotionsCanBeUpdatedUseCase,
  _emotionsListUseCase: EmotionsListUseCase
) => {
  const emotionsCanBeUpdatedUseCase = useProxy<EmotionsCanBeUpdatedUseCase>(_emotionsCanBeUpdatedUseCase)
  const emotionsListUseCase = useProxy<EmotionsListUseCase>(_emotionsListUseCase)
  const [emotions, setEmotions] = useState<EmotionEntity[]>([])

  useEffect(() => {
    emotionsListUseCase.execute().then(emotionsList => setEmotions(emotionsList))
  }, [])

  return (
    <>
      <Dislike
        onClick={() =>
          emotionsCanBeUpdatedUseCase.setEmotion(new EmotionEntity(1, EmotionType.DISLIKE, new Count(1))).execute()
        }
      />
      <span className="absolute f3 top-0">{emotions[0].count.value}</span>
    </>
  )
}

export const EmotionContainer = bindDependencies(Emotion, [
  TYPES.EmotionsCanBeUpdatedUseCase,
  TYPES.EmotionsListUseCase,
]) as React.FunctionComponent<{}>
