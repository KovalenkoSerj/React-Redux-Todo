import React from 'react'
import './footer.css'

const FILTERS_BTN = [
    {
        text: 'All',
        id: 'all'
    },
    {
        text: 'Active',
        id: 'active'
    },
    {
        text: 'Completed',
        id: 'completed'
    },
]


export const Footer = ({ amount, activeFilter, changeFilter}) => (
    <div className="footer">
        <span className='amount'>{`${amount} Tasks left`}</span>
        <div className="btn-group">
            {FILTERS_BTN.map(({text, id}) => (
                <button onClick={() => changeFilter(id)} key={id} className={id === activeFilter ? 'filter-btn active' : 'filter-btn'}>{text}</button>
            ))}
        </div>
    </div>
)