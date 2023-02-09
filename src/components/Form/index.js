import { useState } from "react";
import PropTypes from "prop-types";
import { Wrapper, Row, FormElement, Button, Input, Comment } from "./styles";

const Form = (props) => {
    const [form, setForm] = useState({
        value: "",
        date: new Date().toISOString().substring(0, 10),
        comment: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        props.onChange(form)
        setForm({
            ...form,
            value: "",
            comment: ""
        })
    }

    const handleChange = (e) => {
        const { value, name } = e.target
        setForm({
            ...form,
            [name]: name === "value" ? +value : value
        })

        // console.log(typeof value);
        // console.log(name);
    }
    
        return (
            <Wrapper>
                <FormElement name="form" onSubmit={handleSubmit}>
                    <Row>
                        <Input type="date" 
                            name="date" 
                            onChange={handleChange} 
                            value={form.date}/>
                        <Input name="value" 
                            type="number" 
                            placeholder="Type a number" 
                            onChange={handleChange} 
                            value={form.value}/>
                    </Row>
                    <Row>
                        <Comment name="comment" 
                            onChange={handleChange} 
                            value={form.comment}/>
                        <Button>Save</Button>

                    </Row>
                </FormElement>
            </Wrapper>
          
        )
    
}

Form.propTypes = {
    onChange: PropTypes.func
}

export default Form