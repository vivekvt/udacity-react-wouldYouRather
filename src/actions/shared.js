import { getInitialData, saveQuestion, saveQuestionAnswer } from '../utils/api';
import { receiveUsers, updateUserAnswers, updateUserQuestions } from './users';
import { receiveQuestions, answerQuestion, addQuestion } from './questions';
import { setAuthUser } from './authUser';
import { showLoading, hideLoading } from 'react-redux-loading';

// const AUTHED_ID = 'vivekvt';
// const AUTHED_ID = 'sarahedo';

export function handleInitialData(AUTHED_ID) {
    return (dispatch) => {
        dispatch(showLoading());
        return getInitialData()
            .then(({ users, questions }) => {
                dispatch(receiveUsers(users));
                dispatch(receiveQuestions(questions));
                dispatch(setAuthUser(AUTHED_ID));
                dispatch(hideLoading());
            })
    }

}


export function handleAddQuestion(optionOneText, optionTwoText) {
    return (dispatch, getState) => {
        const { authUser } = getState();
        dispatch(showLoading());
        return saveQuestion({
                optionOneText,
                optionTwoText,
                author: authUser,
            })
            .then((question) => {
                console.log("quesvee---", question)
                dispatch(addQuestion(question));
                dispatch(updateUserQuestions({ question, authUser }))
            })
            .then(() => dispatch(hideLoading()))
    }
}

export function handleAnswerQuestion(info) {
    return (dispatch) => {
        dispatch(showLoading());
        return saveQuestionAnswer(info).then((a) => {
            dispatch(answerQuestion(info));
            dispatch(updateUserAnswers(info));
        }).then((r) => {
            dispatch(hideLoading());
        }).catch((e) => {
            console.warn('Error in handleAnswerQuestion', e);
            alert("There was an error");
            dispatch(hideLoading());
        })
    }
}