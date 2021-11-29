import { useState } from 'react'
import Button from '../Button'

import './styles.scss'

const Calculator = () => {
    const [resultado, setResultado] = useState({ n1: 0, n2: 0 })
    const [total, setTotal] = useState(0)

    const getDataInput = (e, inputOrder) => {
        if(inputOrder === 'number1'){
            setResultado(state => ({ ...state, n1: e.target.value }))
        } 

        if(inputOrder === 'number2'){
            setResultado(state => ({ ...state, n2: e.target.value }))
        }
    }

    const sumar = () => {
        resultado.n1 && resultado.n2 && setTotal(parseInt(resultado.n1) + parseInt(resultado.n2))
    }

    const restar = () => {
        resultado.n1 && resultado.n2 && setTotal(parseInt(resultado.n1) - parseInt(resultado.n2))
    }

    const multiplicar = () => {
        resultado.n1 && resultado.n2 && setTotal(parseInt(resultado.n1) * parseInt(resultado.n2))
    }

    const dividir = () => {
        resultado.n1 && resultado.n2 && setTotal(parseInt(resultado.n1) / parseInt(resultado.n2))
    }


    return(
        <section>
            <h2>Calculator</h2>
            <div className='resultado'>
                <input 
                    onChange={e => getDataInput(e, 'number1')} 
                    type='number' 
                    placeholder='Primer numero' 
                    value={resultado.n1}
                />
                <input 
                    onChange={e => getDataInput(e, 'number2')} 
                    type='number' 
                    placeholder='Segundo numero' 
                    value={resultado.n2}
                />
                {total && <span>{total}</span>}
            </div>
            <Button text='Sumar' fn={() => sumar()} />
            <Button text='Restar' fn={() => restar()} />
            <Button text='Multiplicar' fn={() => multiplicar()} />
            <Button text='Dividir' fn={() => dividir()} /> 
        </section>
    )
}

export default Calculator