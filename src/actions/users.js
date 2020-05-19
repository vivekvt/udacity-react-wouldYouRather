export const RECEIVE_USERS = 'RECEIVE_USERS';
export const UPDATE_USER_ANSWERS = 'UPDATE_USER_ANSWERS';
export const UPDATE_USER_QUESTIONS = 'UPDATE_USER_QUESTIONS';

export function receiveUsers(users) {
    return {
        type: RECEIVE_USERS,
        users,
    }

}

export function updateUserAnswers({ authUser, id, answer }) {
    return {
        type: UPDATE_USER_ANSWERS,
        id,
        authUser,
        answer,
    }

}

export function updateUserQuestions({ question, authUser }) {
    return {
        type: UPDATE_USER_QUESTIONS,
        question,
        authUser,
    }

}