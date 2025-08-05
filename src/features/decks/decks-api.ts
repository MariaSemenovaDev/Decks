import axios from 'axios'

export const instance = axios.create({
  baseURL: 'https://api.flashcards.andrii.es',
  headers: {
    'x-auth-skip': true,
  },
})

export const decksApi = {
  getDecks() {
    return instance.get<FetchDecksResponse>('/v2/decks')
  },
  addDeck(params: AddDeckParams) {
    return instance.post<Deck>('/v1/decks', params)
  }
}

export type AddDeckParams = {
  name: string
}

export type FetchDecksResponse = {
  items: Deck[]
  pagination: Pagination
  maxCardsCount: number
}

export type Pagination = {
  currentPage: number
  itemsPerPage: number
  totalPages: number
  totalItems: number
}

export type Author = {
  id: string
  name: string
}

export type Deck = {
  isFavorite: boolean
  author: Author
  id: string
  userId: string
  name: string
  isPrivate: boolean
  cover: string
  created: string
  updated: string
  cardsCount: number
  pagination: Pagination
}



// последовательность:
// файл decksApi - написала get-запрос
// + типизация ответа с сервера с помощью JSON2ts (или чат джипити)