
import React from 'react'
import { useSelector } from 'react-redux';
import { formatter } from '../helpers/formatMoney';
import Link from 'next/link'
import { Fragment } from 'react';

const Gracias = () => {
    const storeData = useSelector(state => state); // Constante para obtener el store default o actualizado
    const list = storeData.productos.client.products ? storeData.productos.client.products : []; // lista se los productos seleccionados
    const { currency, client } = storeData.productos;
    return (
        <Fragment>
            <div className="flex justify-center items-center">
                <table className="mx-auto max-w-4xl w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5">
                    <thead>
                        {
                            list.map((row, index) =>
                                <tr className="bg-teal-400 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0" key={index}>
                                    <th className="p-3 text-left">
                                        Fabricante
                                </th>
                                    <th className="p-3 text-left">
                                        Nombre
                                </th>
                                    <th className="p-3 text-left">
                                        Modelo
                                </th>
                                    <th className="p-3 text-left">
                                        Descripcion
                                </th>
                                    <th className="p-3 text-left">
                                        Costo
                                </th>
                                </tr>
                            )
                        }
                    </thead>
                    <tbody className="flex-1 sm:flex-none">
                        {
                            list.map((row, index) =>
                                <tr className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0" key={index}>

                                    <td className="border-grey-light border hover:bg-gray-100 p-3">{row.maker}</td>
                                    <td className="border-grey-light border hover:bg-gray-100 p-3">{row.name}</td>
                                    <td className="border-grey-light border hover:bg-gray-100 p-3">{row.modelSelected ? row.modelSelected : "Color unico"}</td>
                                    <td className="border-grey-light border hover:bg-gray-100 p-3">{currency === "mxn" ? row.description_es : row.description_en}</td>
                                    <td className="border-grey-light border hover:bg-gray-100 p-3 text-transform: uppercase">{currency === "mxn" ? formatter.format(row.price_mxn) : formatter.format(row.price_usd)} {currency}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>

            <div className="flex justify-center items-center">
                <div className="max-w-2xl bg-white border-2 border-gray-300 p-5 rounded-md tracking-wide shadow-lg">
                    <div id="header" className="flex">
                        <img alt="mountain" className="h-20 w-20 rounded-md border-2 border-gray-300" src="https://www.pxsglobal.net/wp-content/uploads/2019/01/successpayment.png" />
                        <div id="body" className="flex flex-col ml-5">
                            <h4 id="name" className="text-xl font-semibold mb-2">Gracias por su compra</h4>
                            <p className="text-transform: uppercase">{`Total: ${formatter.format(client.total ? client.total : 0)} ${currency}`}</p>
                            <div className="flex mt-5">
                                <p className="ml-3">Nombre :{`${client.firstName} ${client.lastName}`}</p>
                            </div>
                            <Link href="/"><a className="px-24 py-4 bg-gray-900 rounded-md text-white text-sm focus:border-transparent">Seguir Comprando</a></Link>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Gracias;
