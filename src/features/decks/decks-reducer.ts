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
    case 'DECKS/ADD-DECKS':
      return {
        ...state,
        decks: [action.deck, ...state.decks],
      }
    default:
      return state
  }
}

type DecksActions =
  SetDecksAction
| AddDecksAction

export const setDecksAC = (decks: Deck[]) => ({
  type: 'DECKS/SET-DECKS' as const,
  decks,
})
export const addDecksAC = (deck: Deck) => ({
  type: 'DECKS/ADD-DECKS' as const,
  deck,
})

export type SetDecksAction = ReturnType<typeof setDecksAC>
export type AddDecksAction = ReturnType<typeof addDecksAC>

