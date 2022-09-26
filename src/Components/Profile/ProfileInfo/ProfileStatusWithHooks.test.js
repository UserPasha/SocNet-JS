import React from 'react'
import {create} from "react-test-renderer";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import TestRenderer from 'react-test-renderer';

describe('ProfileStatus Component', ()=>{
    test('status from props should be in state', ()=>{
        const component = TestRenderer.create(<ProfileStatusWithHooks status='testOne'/>)
        const testInstance = component.root;
        expect(testInstance.findByType(ProfileStatusWithHooks).props.status).toBe('testOne')
    })
    test('span should be rendered', ()=>{
        const component = TestRenderer.create(<ProfileStatusWithHooks status='testOne'/>)
        const testInstance = component.root;
        let span = testInstance.findByType(ProfileStatusWithHooks).findAllByType('span')
        expect(span.length).toBe(1)
    })
    // test('input should not  be rendered', ()=>{
    //     const component = TestRenderer.create(<ProfileStatusWithHooks status='testOne'/>)
    //     const testInstance = component.root;
    //     expect(()=>{
    //         let input = testInstance.findByType(ProfileStatusWithHooks).findAllByType('input')
    //     }).toThrow()
    // })
    // test('span should be change on input by double-click', ()=>{
    //     const component = TestRenderer.create(<ProfileStatusWithHooks status='testOne'/>)
    //     const testInstance = component.root;
    //     let span = testInstance.findByType(ProfileStatusWithHooks).findAllByType('span')
    //     span.props.onDoubleClick()
    //     let input = testInstance.findByType(ProfileStatusWithHooks).findAllByType('input')
    //     expect(input.props.value).toBe('testOne')
    // })
    // test('callback should be called', ()=>{
    //     const mockCallback = jest.fn()
    //     const component = TestRenderer.create(<ProfileStatusWithHooks status='testOne' updateStatus={mockCallback}/>)
    //     component.mode = false
    //     expect(mockCallback.mock.calls.length).toBe(1)
    // })
})