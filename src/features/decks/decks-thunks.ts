import { Dispatch } from 'react'
import { AddDeckParams, decksApi } from './decks-api.ts'
import { addDecksAC, setDecksAC } from './decks-reducer.ts'

export const fetchDecksTC = () => async (dispatch: Dispatch) => {
  try {
    const res = await decksApi.getDecks()
    dispatch(setDecksAC(res.data.items))
  } catch (e) {
return e
  }
}

export const addDeckTC = (params: AddDeckParams) => async (dispatch: Dispatch) => {
  try {
    const res = await decksApi.addDeck(params)
    dispatch(addDecksAC(res.data))
  } catch (e) {
    return e
  }
}