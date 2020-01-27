// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import React from 'react';
import {render, fireEvent, wait } from '@testing-library/react';
import { getData as mockGetData } from './api';
import '@testing-library/jest-dom/extend-expect';

jest.mock('./api');

test('renders the stuff', async () => {
    mockGetData.mockResolvedValueOnce({ id: 1});

    




})




test('this is a asdf test', () => {})