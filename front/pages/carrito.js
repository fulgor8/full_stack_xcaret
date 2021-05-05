import React, { Fragment } from 'react'
import { formatter } from '../helpers/formatMoney';
const Carrito = ({ carShop = [], total = 0, currency = "mxn", setViewModal, setCarShop }) => {
    /**
    *   @description Funcion para mostrar el formulario persona
    */
    const payment = () => {
        setViewModal(true);
    }
    /**
    *   @description Funcion para eliminar producto del carrito
    *   @param {Number} id
    */
    const deleteItem = (id) => {
        const newDatas = carShop.filter(prod => prod._id !== id);
        setCarShop(newDatas);
    }
    const changeModel = (e, index) => {
        const newDatas = carShop;
        newDatas[index].modelSelected = e.target.value;
        setCarShop(newDatas);
    }
    return (
        <div className="grid lg:grid-cols-1 gap-4 px-4">
            <button
                onClick={() => payment()}
                className="px-24 py-4 bg-gray-900 rounded-md text-white text-sm focus:border-transparent btn-flotante-xcaret">
                Pagar
                    </button>
            <p className="text-total-xcaret ">
                Total: {`${formatter.format(total)} ${currency}`}
            </p>
            {
                carShop.map((row, index) =>
                    <div key={index} className="bg-gray-100 border-indigo-600 dark:bg-gray-800 bg-opacity-95 border-opacity-60 | p-4 border-solid rounded-2xl border-2 |  justify-around  | hover:bg-indigo-400 dark:hover:bg-indigo-600 hover:border-transparent | transition-colors duration-500">
                        <label className="cursor-pointer" onClick={() => deleteItem(row._id)} >
                            <svg className="fill-current float-right" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                                <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                            </svg>
                        </label>
                        <div className="grid lg:grid-cols-1 text-center">
                            <p className="text-gray-900 dark:text-gray-300 font-semibold">{`${row.maker} ${row.name}`}</p>
                            {
                                row.models.length > 0 &&
                                <Fragment>
                                    <p className="text-gray-900 dark:text-gray-300 font-semibold">Modelo</p>
                                    <select onChange={e => changeModel(e, index)} key={index} className="w-full border bg-white rounded px-3 py-2 outline-none">
                                        {
                                            row.models.map((model, keyD) =>
                                                <option key={`${keyD}-option`} value={model} className="py-1">{model}</option>
                                            )
                                        }
                                    </select>

                                </Fragment>

                            }
                            <p className="text-gray-900 dark:text-gray-300 font-semibold text-transform: uppercase">{formatter.format(currency === "mxn" ? row.price_mxn : row.price_usd)}  {currency}</p>
                        </div>
                    </div>
                )
            }

        </div>
    )
}
export default Carrito;