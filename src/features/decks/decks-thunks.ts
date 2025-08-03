import { Dispatch } from 'react'
import { decksApi } from './decks-api.ts'

export const fetchDecksTC = () => async (dispatch: Dispatch) => {
  try {
    const res = await decksApi.getDecks()
    return res.data.items
  } catch (e) {
return e
  }
}
