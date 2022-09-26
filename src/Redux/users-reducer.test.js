import {v1} from "uuid";
import {followAC, unFollowAC, UsersReducer} from "./users-reducer";

test("following users", () => {
        const startState = {
            users: [
                {
                    id: 1,
                    fullName: "Grigory Lermontov",
                    followed: false,
                    status: "active",
                    location: {country: "Belarus", city: "Minsk"}
                },
                {
                    id: 2,
                    fullName: "Elena Katina",
                    followed: false,
                    status: "im learn something...",
                    location: {country: "Belarus", city: "Hrodno"}
                },
                {
                    id: 3,
                    fullName: "Vasiliy Smolov",
                    followed: true,
                    status: "buy a car",
                    location: {country: "Belarus", city: "Minsk"}
                },

            ],

        }
        const endState = UsersReducer(startState, followAC(1))

        expect(endState.users.length).toBe(3);
        expect(endState.users[0].followed).toBe(true)
        expect(endState.users[1].followed).toBe(false)
    }
)
test("unfollowing users", () => {
        const startState = {
            users: [
                {
                    id: 1,
                    fullName: "Grigory Lermontov",
                    followed: false,
                    status: "active",
                    location: {country: "Belarus", city: "Minsk"}
                },
                {
                    id: 2,
                    fullName: "Elena Katina",
                    followed: false,
                    status: "im learn something...",
                    location: {country: "Belarus", city: "Hrodno"}
                },
                {
                    id: 3,
                    fullName: "Vasiliy Smolov",
                    followed: true,
                    status: "buy a car",
                    location: {country: "Belarus", city: "Minsk"}
                },

            ],

        }
        const endState = UsersReducer(startState, unFollowAC(3))

        expect(endState.users.length).toBe(3);
        expect(endState.users[0].followed).toBe(false)
        expect(endState.users[2].followed).toBe(false)
    }
)