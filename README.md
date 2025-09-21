# 1. Get запрос
 последовательность:
 1) файл decksApi - написала get-запрос
 + типизация ответа с сервера с помощью JSON2ts (или чат джипити)
   типизация взята из swagger документации
2) вмонтирование в компонент DecksList с помощью useEffect
     useEffect(() => {
    decksApi.getDecks()
  }, [])


# 2. Redux-flow
1) написать action creator (setDecksAC)
2) написать case в reducer для этого action
3) задиспатчить action в компоненте DecksList
4) получить decks из redux state в компоненте DecksList
5) отрендерить decks, используя компонент DecksItem

# 3. Redux thunk
Вынести асинхронную логику из компонента DecksList
1) написать fetchDecksTC
2) использовать fetchDecksTC в компоненте DecksList
3) инкапуслируем в кастомный хук

# 4. post-запрос
1) написать post-запрос в decksAPI (addDeck) - работаем только с name
2) написать addDeckTC и addDeckAC ( + case в decksReducer)
3) задиспатчить thunk при отправке формы в компонтенте AddNewDeckForm (функция onSubmit, name берем из data)
   
