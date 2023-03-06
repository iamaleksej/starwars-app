import React from 'react'
import { render, screen } from '@testing-library/react'
import PeopleItem from './PeopleItem'

const item = {
   "name": "C-3PO",
   "height": "167",
   "mass": "75",
   "hair_color": "n/a",
   "skin_color": "gold",
   "eye_color": "yellow",
   "birth_year": "112BBY",
   "gender": "n/a",
   "homeworld": "https://swapi.dev/api/planets/1/",
   "films": [
      "https://swapi.dev/api/films/1/",
      "https://swapi.dev/api/films/2/",
      "https://swapi.dev/api/films/3/",
      "https://swapi.dev/api/films/4/",
      "https://swapi.dev/api/films/5/",
      "https://swapi.dev/api/films/6/"
   ],
   "species": [
      "https://swapi.dev/api/species/2/"
   ],
   "vehicles": [],
   "starships": [],
   "created": "2014-12-10T15:10:51.357000Z",
   "edited": "2014-12-20T21:17:50.309000Z",
   "url": "https://swapi.dev/api/people/2/"
}


const mockedUsedNavigate = jest.fn();
const mockedUsedDispatch = jest.fn();

jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
   useNavigate: () => mockedUsedNavigate,
}));

jest.mock('react-redux', () => ({
   ...jest.requireActual('react-redux'),
   useDispatch: () => mockedUsedDispatch,
}));


test("renders PeopleItem component", () => {
   const { container } = render(
      <PeopleItem item={item} />,
   )
   screen.debug()
   expect(container.getElementsByClassName('people__height').length).toBe(1);
   expect(container.getElementsByClassName('people__gender').length).toBe(0);
   expect(container.getElementsByClassName('people__birthyear').length).toBe(1);
   expect(container.getElementsByClassName('people__mass').length).toBe(1);


})