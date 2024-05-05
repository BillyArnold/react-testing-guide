import React from "react";
import { render, cleanup } from "react-testing-library";
import Movie, { POSTER_PATH } from "./Movie";
import { MemoryRouter } from "react-router-dom";

afterEach(() => {
    cleanup();
    console.error.mockClear();
});

console.error = jest.fn();

test('<Movie />', () => {
    render(<Movie />);
    expect(console.error).toHaveBeenCalledTimes(1);
});

const movie = {
    id: 1,
    title: "hello",
    poster_path: `${POSTER_PATH}/hello`,
}

test('<Movie /> with movie', () => {
    const { getByTestId } = render(<MemoryRouter><Movie movie={movie} /></MemoryRouter>);
    expect(console.error).not.toHaveBeenCalled();

    expect(getByTestId('movie-link').getAttribute('href')).toBe(`/${movie.id}`);
    expect(getByTestId('movie-poster').getAttribute('src')).toBe(`${POSTER_PATH}${movie.poster_path}`);
});