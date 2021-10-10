import React from 'react';
import {create} from 'react-test-renderer';
import {Status} from './status';



describe('StatusClass component', () => {
    test('status in props should be on the state', () => {
        const component = create(<Status status={'it-kamasutra.com'}/>)
        const instance: any = component.getInstance();
        expect(instance.state.status).toBe('it-kamasutra.com');
    });
    test('after creation span with status should be displayed with correct status', () => {
        const component = create(<Status status={'it-kamasutra.com'}/>)
        const root: any = component.root;
        let div = root.findAllByType('div')
        expect(div.length).toBe(1);
    })
    test('div with status should contains correct status', () => {
        const component = create(<Status status={'it-kamasutra.com'}/>)
        const root: any = component.root;
        let div = root.findByType('div')
        expect(div.children.join('')).toBe('status: it-kamasutra.com');
    })
    test('input shouldn`t be displayed', () => {
        const component = create(<Status status={'it-kamasutra.com'}/>)
        const root: any = component.root;
        let div = root.findAllByType('input')
        expect(div.length).toBe(0);
    })
    test('callback should be called', () => {
        const mockCallBack = jest.fn();
        const component = create(<Status status={'it-kamasutra.com'} updateStatus={mockCallBack}/>)
        const instance: any = component.getInstance();
        instance.toggleEditModeOff();
        expect(mockCallBack.mock.calls.length).toBe(1);
    })
})