import { useEffect, useState } from "react";
import Balance from "../Balance";
import Form from "../Form"
import Transactions from "../Transactions";
// import Navbar from "../Navbar";
import ErrorBoundary from "../ErrorBoundary";
import { getItems, addItem } from "../../utils/indexdb";

import { Wrapper } from "./styles";
// import { Outlet } from "react-router-dom";


const Home = () => {
    const [data, setData] = useState({
        balance: 0,
        transactions: [] 
    })

    useEffect(() => {
        getItems().then((transactions) => {
            console.log(transactions);
            const valueOfTransaction = transactions.map((transaction) => {
                return transaction.value;
            })
            
            const initialValue = 0;
                    
            setData({
                balance: valueOfTransaction.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue),
                transactions
            })
                    // console.log(transactions);
                }).catch((error) => {
                    console.log(error);
                })
    }, [setData])

    const onChange = (form) => {
        const transaction = {
            value: +form.value, 
            date: form.date, 
            comment: form.comment,
            id: Date.now()
        }
        setData({
            balance: data.balance + Number(form.value),
            transactions: [transaction, ...data.transactions]
        })

        addItem(transaction)
    }
        return (
            <ErrorBoundary>
                <Wrapper>
                    {/* <Navbar/> */}
                    <Balance balance={data.balance}/>
                    <Form onChange={onChange}/>
                    <hr/>
                    <Transactions transactions={data.transactions}/>
                    

                    {/* <Outlet/> */}
                </Wrapper>
            </ErrorBoundary>
            
        )
    
}
  
export default Home;
  