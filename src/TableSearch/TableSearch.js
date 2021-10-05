import React, {useState} from 'react'

export default props => {
    const [value, setValue] = useState('')
    const valueChangeHandler = event => {
        setValue(event.target.value)
      }

    return (
      <>
        <div className="input-group mb-3 mt-3">
          <div className="input-group-prepend">
            <button
              className="btn btn-outline-secondary"
              onClick={() => props.onSearch(value)}
            >
              Search
            </button>
          </div>
          <input
            type="text"
            className="form-control"
            onChange={valueChangeHandler}
            value={value}
          />
        </div>

        <p className="">
          Поиск покажет любые совпадающие значения. Если совпадений нет,
          тогда все данные.
        </p>
        <p className="">Для сортировки кликните по заголовку таблицы.</p>
        <p className="">Нажмите на нужную строку, чтобы просмотреть подробности.</p>
      </>
    );
}