import React from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import Home from '.';
import { getItems } from '../../utils/indexdb';

// import { getItems, addItem } from "../../utils/indexdb";

// jest.mock("../../utils/indexdb", () => ({
//     getItems: jest.fn(),
//     addItem: jest.fn()
// }))

describe("Home component", () => {
    let sut;
    let props;

    beforeEach(() => {
        // props = {}
        sut= mount(<Home {...props}/>)
    })

    describe("whem component is mounted", () => {
        xit("should set balance to 0", () => {
            const { balance } = sut.find("Balance").at(0).props()
            expect(balance).toBe(0)

        })

        it("should set transactions to empty array", () => {
            const { transactions } = sut.find("Transactions").props();
            console.log(transactions);
            expect(transactions).toStrictEqual([])
        })
    })

    describe("when transactions are returned successfully", () => {
        beforeEach(() => {
            getItems.mockImplementation(() => Promise.resolve([{value: 1}]));
        })

        beforeEach(async () => {
            await act(async() => {
                sut = mount(<Home {...props}/>)

            });

            sut.update()
        })

        xit("should render transactions with one item", () => {
            const { transactions } = sut.find("Transactions").at(0).props();
            console.log(transactions);

            expect(transactions).toEqual([{value: 1}])
        })
    })
})