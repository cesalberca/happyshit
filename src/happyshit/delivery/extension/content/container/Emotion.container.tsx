import React, { useState } from 'react'
import { Dislike } from '../components/Dislike.component'
import { bindDependencies } from '../../../../../arch/bindDependencies'
import { EmotionsCanBeUpdatedUseCase } from '../../../../domain/useCases/emotions/EmotionsCanBeUpdated.useCase'
import { TYPES } from '../../../../../arch/types'
import { useProxy } from '../../../../../arch/delivery/hooks/useProxy'
import { Emotion as EmotionEntity } from '../../../../domain/entities/Emotion.entity'
import { counter, emotion, wrapper } from './Emotion.container.css'

const Emotion = (_emotionsCanBeUpdatedUseCase: EmotionsCanBeUpdatedUseCase) => {
  const emotionsCanBeUpdatedUseCase = useProxy<EmotionsCanBeUpdatedUseCase>(_emotionsCanBeUpdatedUseCase)
  const [emotions] = useState<EmotionEntity[]>([])

  /*useEffect(() => {
    emotionsListUseCase.execute().then(emotionsList => setEmotions(emotionsList))
  }, [])*/

  return (
    <div className={wrapper}>
      <Dislike
        classNames={[emotion]}
        onClick={() => {
          emotionsCanBeUpdatedUseCase.setEmotion(emotions[0]).execute()
        }}
      />
      <span className={counter}>{emotions.map(e => e.count.value)}</span>
    </div>
  )
}

export const EmotionContainer = bindDependencies(Emotion, [
  TYPES.EmotionsCanBeUpdatedUseCase,
]) as React.FunctionComponent<{}>
