import React from 'react'
import renderer from 'react-test-renderer'
import {render, fireEvent} from '@testing-library/react'
import  Contact from './Contact'
import { act } from 'react-dom/test-utils';
import { unmountComponentAtNode } from 'react-dom';

let container = null;
  beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
  });
  afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

describe('Contact Component', () => {
    it('should render component correctly', () => {
        const component = renderer.create(<Contact/>).toJSON();
        expect(component).toMatchSnapshot();
    })

    it('changes value when clicked', async () => {
        const { getByTestId} = render(<Contact />)
        const name = getByTestId("yourName")
        act(() => {
            fireEvent.blur(name)
        });
        await (() => {
            expect(getByTestId("errorMessage")).toHaveTextContent('Required!');
        })

    })
    it('should submit correct information', async () => {
        const { getByTestId} = render(<Contact />)
        const name = getByTestId("yourName")
        const selectVal = getByTestId("select")
        const message = getByTestId("message")
        const formContact = getByTestId("form-contact")

        const fakeInfo = {
            fakeName: 'Le Hai',
            fakeSelect: 'Rider',
            fakeMessage: 'Unit Testing'
        }
        act(() => {
            fireEvent.change(name, {target: {value: fakeInfo.fakeName}})
            fireEvent.change(selectVal, {target: {value: fakeInfo.fakeSelect}})
            fireEvent.change(message, { target: {value: fakeInfo.fakeMessage}})
            fireEvent.submit(formContact)
        });
        await (() => {
            expect(name).toHaveTextContent(fakeInfo.fakeName);
            expect(selectVal).toHaveTextContent(fakeInfo.fakeSelect)
            expect(message).toHaveTextContent(fakeInfo.fakeMessage)
        })
    })

})
