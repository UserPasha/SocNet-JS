import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {ProfileReducer} from "./profile-reducer";
import {DialogsReducer} from "./dialogs-reducer";
import {SidebarReducer} from "./sidebar-reducer";
import {UsersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";
import {appReducer} from "./app-reducer"
import thunkMiddleware  from "redux-thunk";
import {reducer as formReducer} from 'redux-form'

let reducers = combineReducers({
    profilePage: ProfileReducer,
    dialogsPage: DialogsReducer,
    sidebar: SidebarReducer,
    usersPage: UsersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)))

window._store_= store