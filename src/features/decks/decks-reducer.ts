import { Deck } from './decks-api.ts'

const initialState = {
  decks: [] as Deck[],
  searchParams: {
    name: '',
  },
}


export type DecksState = typeof initialState

export const decksReducer = (state: DecksState = initialState, action: DecksActions): DecksState => {
  switch (action.type) {
    case 'DECKS/SET-DECKS':
      return {
        ...state,
        decks: action.decks,
      }
    default:
      return state
  }
}

type DecksActions = SetDecksAction

export const setDecksAC = (decks: Deck[]) => ({
  type: 'DECKS/SET-DECKS' as const,
  decks,
})

export type SetDecksAction = ReturnType<typeof setDecksAC>

