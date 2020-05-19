import { RECEIVE_USERS, UPDATE_USER_ANSWERS, UPDATE_USER_QUESTIONS } from '../actions/users';

export default function users(state = {}, action) {
    switch (action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users,
            }
        case UPDATE_USER_ANSWERS:
            return {
                ...state,
                [action.authUser]: {
                    ...state[action.authUser],
                    answers: {
                        ...state[action.authUser].answers,
                        [action.id]: action.answer
                    }
                }
            }
        case UPDATE_USER_QUESTIONS:
            return {
                ...state,
                [action.authUser]: {
                    ...state[action.authUser],
                    questions: state[action.authUser].questions.concat([action.question.id])
                }
            }
        default:
            return state
    }
}