export default function (state, action) {
  switch (action.type) {
    case 'add':
      return [
        ...state,
        {
          id: Date.now(),
          title: action.payload,
          completed: false,
        },
      ]

    case 'toggle':
      return state.map(e => {
        if (e.id === action.payload) {
          e.completed = !e.completed
        }
        return e
      })

    case 'remove':
      return state.filter(e => e.id !== action.payload)

    default:
      return state
  }
}
