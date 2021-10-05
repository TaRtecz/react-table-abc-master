import React from 'react';
import './DetailRowView.css';

export default ({person}) => (
    <div className="box__row">
    <p>Выбран пользователь <b>{person.firstName + ' ' + person.lastName}</b></p>
    <p>
    Описание: <br />
    <textarea className="box__row-textarea" defaultValue={person.description} />
    </p>

    <p>Адрес проживания: <b>{person.address.streetAddress}</b></p>
    <p>Город: <b>{person.address.city}</b></p>
    <p>Провинция/штат: <b>{person.address.state}</b></p>
    <p>Индекс: <b>{person.address.zip}</b></p>

  </div>
)