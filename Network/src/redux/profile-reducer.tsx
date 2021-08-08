import {profileAPI, usersAPI} from "../api/api";
import {ThunkDispatch} from "redux-thunk";
import {AppActionsType} from "./redux-store";

export type ActionsTypes = AddPostActionType | UpdateNewPostTextType | setUserProfileType | setStatusProfileType

export type AddPostActionType = ReturnType<typeof addPostActionCreator>
export type UpdateNewPostTextType = ReturnType<typeof updateNewPostTextActionCreator>
export type setUserProfileType = ReturnType<typeof setUserProfile>
export type setStatusProfileType = ReturnType<typeof setStatusProfileActionCreator>
export type PostType = {
    id: number,
    message: string,
    likesCount: number,
    avatar: string
}
export type ProfileUserType = {
    aboutMe: string,
    contacts: {
        facebook: string,
        website: null,
        vk: string,
        twitter: string,
        instagram: string,
        youtube: null,
        github: string,
        mainLink: null
    },
    lookingForAJob: true,
    lookingForAJobDescription:string,
    fullName: string,
    userId: number,
    photos: {
        small: string | null
        large: string | null
    }

}

const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const SET_STATUS_PROFILE = 'SET-STATUS-PROFILE'

let initialState = {
    posts: [
        {
            id: 1,
            message: 'Hi,how are you?',
            likesCount: 12,
            avatar: "https://i.pinimg.com/originals/9c/77/46/9c7746225873e02d83b9315501b8dd2f.jpg"
        },
        {
            id: 2,
            message: "It's my first post",
            likesCount: 8,
            avatar: "https://images.boosty.to/user/822986/avatar?change_time=1593874069&croped=1&mh=150&mw=150"
        },
        {
            id: 3,
            message: "It's my first post",
            likesCount: 8,
            avatar: "https://images.boosty.to/user/822986/avatar?change_time=1593874069&croped=1&mh=150&mw=150"
        },
        {
            id: 4,
            message: "It's my first post",
            likesCount: 8,
            avatar: "https://images.boosty.to/user/822986/avatar?change_time=1593874069&croped=1&mh=150&mw=150"
        },
    ] as Array<PostType>,
    newPostText: '',
    profile: {

    } as ProfileUserType,
    status: ''
}
export type InitialStateType = typeof initialState


export const profileReducer = (state:InitialStateType = initialState , action: ActionsTypes):InitialStateType => {
    switch (action.type) {
        case ADD_POST:
            let newPost: PostType = {
                id: new Date().getTime(),
                message: state.newPostText,
                likesCount: 1,
                avatar: "https://images.boosty.to/user/822986/avatar?change_time=1593874069&croped=1&mh=150&mw=150"
            }
             return {
                ...state,
                posts : [...state.posts, newPost],
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText : action.newText
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile : action.profile
            };
        case SET_STATUS_PROFILE:
            return {
                ...state,
                status : action.status
            };
        default:
            return state
    }

}
export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    } as const
}
export const updateNewPostTextActionCreator= (newText:string) => {
    return {
        type:UPDATE_NEW_POST_TEXT,
        newText:newText
    } as const
}
export const setStatusProfileActionCreator= (status:string) => {
    return {
        type:SET_STATUS_PROFILE,
        status,
    } as const
}
export const setUserProfile = (profile: ProfileUserType) => {
    return  {
        type: SET_USER_PROFILE,
        profile:profile
    } as const
}
export const getUserProfile = (userId: string) => (dispatch: ThunkDispatch<{}, {}, AppActionsType>)=>{
    usersAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data));
        });
}
export const getStatusProfile = (userId: string) => (dispatch: ThunkDispatch<{}, {}, AppActionsType>)=>{
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatusProfileActionCreator(response.data));
        });
}
export const updateStatusProfile = (status : string) => (dispatch: ThunkDispatch<{}, {}, AppActionsType>)=>{
    profileAPI.updateStatus(status)
        .then(response => {
            if(response.data.resultCode === 0){
                dispatch(setStatusProfileActionCreator(response.data));
            }
        });
}