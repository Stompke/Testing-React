// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import React from 'react';
import {render, fireEvent, wait } from '@testing-library/react';
import StarWarsCharacters from './components/StarWarsCharacters';
import { getData as mockGetData } from './api';
import '@testing-library/jest-dom/extend-expect';

// jest.mock('./api');

test('renders the StarWarsCharacters comonenet, with "Next" Button, "Previous" button, ', async () => {
    // mockGetData.mockResolvedValueOnce({ id: 1});


    const { getByLabelText, getByText } = render(<StarWarsCharacters />);

    const previousButton = getByText(/Previous/i);

    const nextButton = getByText(/Next/i);



})




test('this is a asdf test', () => {})