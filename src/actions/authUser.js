export const SET_AUTHED_USER = 'SET_AUTHED_USER';
export const UNSET_AUTHED_USER = 'UNSET_AUTHED_USER';

export function setAuthUser(id) {
    return {
        type: SET_AUTHED_USER,
        id,
    }
}

export function unsetAuthUser(id) {
    return {
        type: UNSET_AUTHED_USER,
        id,
    }

}