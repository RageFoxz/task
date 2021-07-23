const GET_CARDS = 'GET_CARDS';
const GET_CURRENT_CARD_PAGE = 'GET_CURRENT_CARD_PAGE';
const SORTED_CARDS_LIKE = 'SORTED_CARDS_LIKE';
const SORTED_CARDS_COMMENTS = 'SORTED_CARDS_COMMENTS';
const initialState = { cardsData: [], cardPage: {} };

export const uploadCards = (state = initialState, action) => {
  switch (action.type) {
    case GET_CARDS:
      return { ...state, cardsData: [...action.payload] };
    case GET_CURRENT_CARD_PAGE:
      return { ...state, cardPage: { ...action.payload } };
    default:
      return state;
  }
};

export const getCards = (payload) => ({ type: GET_CARDS, payload });
export const getCardPage = (payload) => ({ type: GET_CURRENT_CARD_PAGE, payload });
// export const sortCardsLike = () => ({ type: SORTED_CARDS_LIKE });
// export const sortCardsComments = () => ({ type: SORTED_CARDS_COMMENTS });
