import React from "react";
import { getByTestId, cleanup, render, screen, fireEvent } from "react-testing-library";
import Counter from "./Counter";

afterEach(cleanup);

test('<Counter />', () => {
    const { debug, getByTestId } = render(<Counter />);
    const button = getByTestId('counter-button');
    const display = getByTestId('counter-display');

    expect(display.tagName).toBe('P');
    //test counter starts at 0
    expect(display.textContent).toBe('0');
    //button to increment on click
    fireEvent.click(button);
    expect(display.textContent).toBe('1');
    fireEvent.click(button);
    expect(display.textContent).toBe('2');
});