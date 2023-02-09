import React from 'react';
import {shallow} from 'enzyme';
import Form from '.';
// import { FormElement } from './styles';

describe('Form component', () => {
    let props;
    let sut;

    beforeEach(() => {
        jest.spyOn(global, 'Date')
        .mockImplementation(() => ({
            toISOString: () => '2023-01-28T07:13:38.563Z'
        }));
    })

    beforeEach(() => {
        props = {
            onChange: jest.fn()
        }

        // console.log(props.onChange);

        sut = shallow(<Form {...props}/>);
    });

    describe('when edit form', () => {
        it('should change value input', () => {
            let input = sut.find('[name="value"]').at(0);
    
            input.simulate('change', {target: {
                value: 123,
                name: 'value'
            }});
            sut.update();
            input = sut.find('[name="value"]').at(0);
            
            const props = input.props();
            
            expect(props.value).toBe(123);
        });
    
        it('should change comment input', () => {
            const expectedResult = 'comment value';
            let input = sut.find('[name="comment"]').at(0);
    
            input.simulate('change', {target: {
                value: 'comment value',
                name: 'comment'
            }});
            sut.update();
            input = sut.find('[name="comment"]').at(0);
            
            const { value } = input.props();
            
            expect(value).toBe(expectedResult);
        })

        it("should change date input", () => {
            let input = sut.find("[name='date']").at(0)

            input.simulate("change", {target: {
                value: "2023-01-01",
                name: "date"
            }})

            sut.update();

            input = sut.find("[name='date']").at(0);
            const { value } = input.props();

            expect(value).toBe("2023-01-01")
        })
    })

    describe("when user submit form", () => {
        it("should call onChange from the props", () => {
            let form = sut.find("[name='form']");
            form.simulate("submit", {
                preventDefault: jest.fn()
            });

            expect(props.onChange).toHaveBeenCalledTimes(1)

        })

        it("should send form data", () => {
            let input = sut.find("[name='value']").at(0);
            input.simulate("change", {
                target: {
                    value: 123,
                    name: "value"
                }
            })

            input = sut.find("[name='comment']").at(0);
            input.simulate("change", {
                target: {
                    value: "some comment",
                    name: "comment",
                    // date: "2023-01-01"
                }   
            })

            input = sut.find("[name='date']").at(0)
            input.simulate("change", {
                target: {
                    value: "2023-01-01",
                    name: "date"
                }
            })

            sut.update();

            const form = sut.find("[name='form']");
            form.simulate("submit", {
                preventDefault: jest.fn()
            })

            expect(props.onChange).toHaveBeenCalledWith({
                value: 123,
                comment: "some comment",
                date: "2023-01-01"
            })
        })
    })






    // describe('when user submit form', () => {
    //     it('should call onChange form the props', () => {
    //         const form = sut.find('[name="form"]');

    //         form.simulate('submit', {
    //             preventDefault: jest.fn()
    //         });

    //         expect(props.onChange).toHaveBeenCalledTimes(1);
    //     });

    //     it('should send form data', () => {
    //         let input = sut.find('[name="value"]').at(0);

    //         input.simulate('change', {target: {
    //             value: 123,
    //             name: 'value'
    //         }});

    //         input = sut.find('[name="comment"]').at(0);

    //         input.simulate('change', {target: {
    //             value: 'comment value',
    //             name: 'comment'
    //         }});

    //         sut.update();

    //         const form = sut.find('[name="form"]');
            
    //         form.simulate('submit', {
    //             preventDefault: jest.fn()
    //         });

    //         expect(props.onChange).toHaveBeenCalledWith({
    //             value: 123,
    //             date: '2021-01-01',
    //             comment: 'comment value'
    //         }) 
    //     })
    // })
})

   

   


