import React, { Fragment } from "react";
// action redux
import { pagoProducto } from '../../store/actions/productsAction';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router'

export default function FormPerson({ setViewModal, carShop, setAlert,total }) {
    const dispatch = useDispatch();
    const router = useRouter();
    const insertClient = client => dispatch(pagoProducto(client));
    const [showModal, setShowModal] = React.useState(true);// constante para abrir o cerrar modal
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    /**
    *   @description Funcion para abrir o cerrar modal
    *    @param {boolean} status
    */
    const actionModal = (status) => {
        setShowModal(status);
        setViewModal(status);
    }
    /**
    *   @description Funcion para guardar el cliente en el store
    *   @param {boolean} status
    */
    const confirmPayment = (status) => {
        if (firstName.trim() === '' || lastName.trim() === '') {
            setAlert({ message: "Campos requeridos", status: true, color: 'bg-red-500' });
            return;
        }
        setShowModal(status);
        insertClient({ firstName, lastName, products: carShop ,total});
        router.push('/gracias'); // redirecciona a la vista de gracias
    }
    return (
        <Fragment>
            {
                showModal ? (
                    <Fragment>
                        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                            <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                {/*content*/}
                                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                    {/*header*/}
                                    <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                        <h3 className="text-3xl font-semibold">
                                            DETALLE
                                        </h3>
                                        <button
                                            className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                            onClick={() => actionModal(false)}
                                        >
                                            <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                                ??
                                            </span>
                                        </button>
                                    </div>
                                    {/*body*/}
                                    <div className="relative p-6 ">
                                        <form className="w-full max-w-lg">
                                            <div className="flex flex-wrap -mx-3 mb-6">
                                                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                                        Nombre
                                                    </label>
                                                    <input value={firstName} onChange={e => setFirstName(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" />
                                                </div>
                                                <div className="w-full md:w-1/2 px-3">
                                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                                        Apellido
                                                    </label>
                                                    <input value={lastName} onChange={e => setLastName(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" />
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    {/*footer*/}
                                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                        <button
                                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={() => actionModal(false)}
                                        >
                                            Close
                                        </button>
                                        <button
                                            className="bg-emerald-500  active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={() => confirmPayment(false)}
                                        >
                                            Confirmar Compra
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </Fragment>
                ) :
                    null
            }
        </Fragment>
    );
}