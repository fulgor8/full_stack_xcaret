import React, { Fragment, useState, useEffect } from 'react';
import { formatter } from '../helpers/formatMoney';
import { imgItem } from '../helpers/imageData';
import { useSelector } from 'react-redux';

const Cotizador = ({ product, carShop, setCarShop, setAlert, currency }) => {

    const { name, maker, car_type, price_mxn, price_usd, description_es, description_en } = product;

    const storeData = useSelector(state => state);
    const [reserva, setReserva] = useState(false); //Constante para pintar Reservado ,en caso de que sea true
    const [confirm, setConfirm] = useState(false);//Constante para pintar Comprado ,en caso de que sea true

    useEffect(() => {
        const newDatas = carShop.filter(prod => prod._id === product._id);// filtra para obtener los productos seleccionados
        const confirmItem = storeData.productos.client.products.filter(prod => prod._id === product._id); // filtra para poder obtener los comprados
        if (newDatas.length === 0) {
            setReserva(false);
        }
        if (confirmItem.length > 0) {
            setConfirm(true);
        }
    }, [carShop])
    /**
    *   @description Recibe el objeto producto , el cual este es insertado al array de carritos
    *   @param {object} data
    */
    const addCar = (data) => {
        if (reserva || confirm) {
            setAlert({ message: `El producto ${confirm ? 'no esta disponible' : 'ya esta agregado'} `, status: true, color: 'bg-red-500' });
        } else {
            setCarShop([...carShop, data]);
            setReserva(true);
            setAlert({ message: "El producto se agrego", status: true, color: ' bg-green-500' });
        }
    }
    return (
        <Fragment>
            <div className=" flex items-center justify-center">
                <div>
                    <div className="flex flex-col max-w-md bg-white px-8 py-6 rounded-xl space-y-5 items-center">
                        <h3 className="font-serif font-bold text-gray-900 text-xl">{`${maker}/${name}`}</h3>
                        <img className="w-full rounded-md" src={imgItem['img'][maker]} alt="motivation" />
                        <p className="text-center leading-relaxed">{currency === "mxn" ? `${description_es}` : `${description_en}`}</p>
                        <p className="text-center leading-relaxed">{car_type}</p>
                        <span className="text-center text-transform: uppercase">{formatter.format(currency === "mxn" ? `${price_mxn}` : `${price_usd}`)} {currency}</span>
                        <button onClick={() => addCar(product)} className="px-24 py-4 bg-gray-900 rounded-md text-white text-sm focus:border-transparent">{confirm ? 'Comprado' : reserva ? 'Reservado' : 'Agregar'}</button>
                    </div>
                </div>
            </div>
        </Fragment>

    )
}
export default Cotizador;