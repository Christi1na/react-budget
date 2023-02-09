import React from "react";
import { shallow } from "enzyme"
import Transaction from ".";

describe("Transaction component", () => {
    let props;
    let sut;
    beforeEach(() => {
        props = {
            transaction: {
                value: 23,
                comment: "test",
                date: "01.01.2023"
            }
        }
        sut = shallow(<Transaction {...props}/>)

    })

    describe("describe", () => {

        it("should show transaction", () => {
            // console.log(sut);
            const wrapper = sut.find('Wrapper')
            // console.log(wrapper);
            expect(sut).toMatchSnapshot()
        })
    })
})