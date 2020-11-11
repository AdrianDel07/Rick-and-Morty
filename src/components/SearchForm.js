import React from 'react';


export default function SearchForm(props) {
    return (
        <form className="box-form-search" action='submit' onSubmit={ props.onHandleSubmit }>
            <label>Nombre Del Personaje:</label>
            <div className="box-search">
                <input type="text" name="name" 
                onChange={ props.onHandleChange } value={ props.onvalue } 
                placeholder="Ingresar Personaje..."
                pattern='[A-Za-z]{1,}' title='Ingrese Un Nombre o Letra'
                />
                <button type="submit"><i class="fas fa-search"></i></button>
            </div>
        </form>
    )
}