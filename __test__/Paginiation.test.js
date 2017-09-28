import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import Pagination from '../src/components/Pagination';
import Paginator from '../src/utils/paginator';


const state = [
    {
        name: 'Theodore Roosevelt',
        starred: true
    },
    {
        name: 'Abraham Lincoln',
        starred: false
    },
    {
        name: 'George Washington',
        starred: false
    }
];



describe('Pagination Class', () => {

    it('Paginate method return one item in array after paginating it', () => {
        expect(
            Paginator.paginate(1, 1, state).length
        )
            .to
            .equal(1);
    });

    it('calculateNumberOfPages method return correct number of pages for the applied dataset', () => {
        expect(
            Paginator.calculateNumberOfPages(1, 3)
        )
            .to
            .equal(3);
    });

});


describe('Pagination Component', () => {
    it('renders five pagination items for three frinds', () => {
        const wrapper = shallow(
            <Pagination
                activePage={1}
                itemsPerPage={1}
                NumberOfItems={state.length}
                NumberOfPages={3}
            />
        );
        expect(wrapper.find("li")).to.have.length(5);
    });
})