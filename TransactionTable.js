// TransactionTable.js

import React from 'react';
import './TransactionTable.css'

const TransactionTable = () => {
    const transactions = [
        { date: '10/15/14', transaction: 'Investment Virt • Dundee Venture Capital', amount: '-$2', balance: '$0' },
        { date: '6/18/14', transaction: 'Investment Blinkfire Analytics • FG Angels', amount: '-$1', balance: '$2' },
        { date: '6/11/14', transaction: 'Investment AngelPad Spring 2014', amount: '-$1', balance: '$3' },
        { date: '6/10/14', transaction: 'Investment Merchbar • Matt Mullenweg', amount: '-$1', balance: '$4' },
    ];

    return (
        <div>
            <h2 style={{ textAlign: 'left'}} className='header'>Past Transactions</h2>
            <table style={tableStyle}>
                <thead>
                <tr>
                    <th>Date</th>
                    <th>Transaction</th>
                    <th>Amount</th>
                    <th>Balance</th>
                </tr>
                </thead>
                <tbody>
                {transactions.map((transaction, index) => (
                    <tr key={index} style={{ borderBottom: '1px solid #ddd', marginTop: '5px' }}>
                        <td>{transaction.date}</td>
                        <td>{transaction.transaction}</td>
                        <td>{transaction.amount}</td>
                        <td>{transaction.balance}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
};

export default TransactionTable;
