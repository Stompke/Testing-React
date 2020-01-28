// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import React from 'react';
import {render, fireEvent, wait } from '@testing-library/react';
import StarWarsCharacters from './components/StarWarsCharacters';
import { act } from 'react-dom/test-utils';
import { getData as mockGetData } from './api';
import '@testing-library/jest-dom/extend-expect';

jest.mock('./api');

test('renders the StarWarsCharacters comonenet, with "Next" Button, "Previous" button, ', async () => {
     mockGetData.mockResolvedValueOnce({
       
            count: 87,
            next: "https://swapi.co/api/people/?page=2",
            previous: null,
            results: [{name:'johnny', url:'test1'}, {name:'sam', url:'test2'}, {name:'jerry', url:'test3'}, {name:'adam', url:'test4'}]
            
    });


        const { getByLabelText, getByText } = render(<StarWarsCharacters />);

        const submitButton = getByText(/Next/i);
        
        await wait(() => expect(getByText(/johnny/i)));
})




test('this is a asdf test', () => {})