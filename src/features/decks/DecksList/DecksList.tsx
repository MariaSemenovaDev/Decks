import s from './DecksList.module.css'
import { useEffect } from 'react'
import { fetchDecksTC } from '../decks-thunks.ts'
import { useAppDispatch, useAppSelector } from '../../../app/store.ts'
import { selectDecks } from '../decks-selectors.ts'
import { DeckItem } from './DeckItem/DeckItem.tsx'

export const DecksList = () => {

  const dispatch = useAppDispatch()

  const decks = useAppSelector(selectDecks)

  useEffect(() => {
    dispatch(fetchDecksTC())
  }, [dispatch])

  return <ul className={s.list}>
    {decks?.map((deck) => (
      <DeckItem
        key={deck.id}
        deck={deck}
      />
    ))}
  </ul>
}
