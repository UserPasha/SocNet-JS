import {addPostActionCreator, ProfileReducer, removePost} from "./profile-reducer";
import {v1} from "uuid";

let state = {
    postData:
        [
            {
                id: '1',
                title: "yo!",
                likes: "20 likes",
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb2U8s1f4zV-OxqFBIZFTpbmluCxwkngs8yA&usqp=CAU"
            },
            {
                id: v1(),
                title: "hey!",
                likes: "30 likes",
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqUhrgutc0KGdPsVqtYabKuqq0m4NDoutU-g&usqp=CAU"
            }
        ]
}
it('new post should be added', () => {
    let action = addPostActionCreator('newPostText')

    let newState = ProfileReducer(state, action)
    expect(newState.postData.length).toBe(3)

})

it('new post title should be added', () => {
    let action = addPostActionCreator('newPostText')

    let newState = ProfileReducer(state, action)

    expect(newState.postData[2].title).toBe('newPostText')
})
it('post length should be less after remove post', () => {
    let action = removePost('1')

    let newState = ProfileReducer(state, action)

    expect(newState.postData.length).toBe(1)
})
it('post length should not be less after remove post with incorrect id', () => {
    let action = removePost('war')

    let newState = ProfileReducer(state, action)

    expect(newState.postData.length).toBe(2)
})