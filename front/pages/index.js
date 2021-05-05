
import React, { Fragment, useState, useEffect } from 'react';
import Alert from '../components/alert/alert';
import Nav from '../components/nav/nav';
import { useDispatch, useSelector } from 'react-redux';
import { listCars } from '../store/actions/productsAction';
import Cotizador from './cotizador';
import Carrito from './carrito';
import FormPerson from '../components/formPerson/formPerson';

const Home = () => {
    const storeData = useSelector(state => state);// Constante para obtener el store default o actualizado
    const dispatch = useDispatch(); // Constante para poder usar las funciones declaradas con redux
    const [products, setProducts] = useState([]); // Constante para el listado de carros ,mongodb
    const [alert, setAlert] = useState({ message: "Error", status: false, color: ' bg-green-500' });// Constante para monstar el alert con el mensaje
    const [currency, setCurrency] = useState(storeData.productos.currency);
    const [carShop, setCarShop] = useState([]);//Almacena los productos seleccionados
    const [viewCar, setViewCar] = useState(false); // para mostrar la seccion del carrito
    const [viewModal, setViewModal] = useState(false);// para inicializa el modal al momento de ser true
    const [total, setTotal] = useState(0);// total de los productos seleccionados

    const listProducts = () => dispatch(listCars()); // funciona para poder ejecutar la api 

    useEffect(() => {
        if (products.length === 0) { // validacion para no llamar la api muchas veces
            listProducts();
            setTimeout(() => {
                setProducts(storeData.productos.listProducts); // actualizo con el store de lista, el cual se actualizo al hacer la peticion
            }, 200);
        }
        getTotal(carShop);// funcion para obtener el total de los productos
    }, [carShop, currency, products])

    /**
    *   @description Con el array que recibe,
    *   saca el total, interando con los propiedades price_usd, price_mxn
    *   @param {array} list
    */
    const getTotal = (list) => {
        let totals = {
            usd: 0,
            mxn: 0
        }
        list.forEach(row => {
            totals.usd += row.price_usd;
            totals.mxn += row.price_mxn;
        });
        let total = currency === "mxn" ? totals.mxn : totals.usd;
        setTotal(total);
    }
    return (
        <Fragment>

            <Nav
                carShop={carShop}
                viewCar={viewCar}
                setAlert={setAlert}
                setCurrency={setCurrency}
                setViewCar={setViewCar}

            />
            {
                viewModal &&
                <FormPerson
                    carShop={carShop}
                    setViewModal={setViewModal}
                    setAlert={setAlert}
                />
            }
            <div className="flex  flex-wrap">
                <div className={`w-full ${viewCar && 'md:w-3/4'} text-center `}>
                    <div className="grid lg:grid-cols-2 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 px-4">
                        {
                            products.map((row, index) =>

                                <Cotizador
                                    key={index}
                                    product={row}
                                    carShop={carShop}
                                    currency={currency}
                                    setCarShop={setCarShop}
                                    setAlert={setAlert}
                                />
                            )
                        }
                    </div>
                </div>
                {
                    carShop.length > 0 && viewCar &&
                    <div className={`w-full ${viewCar && 'md:w-1/4'} p-4 text-center text-gray-700`}>
                        <Carrito
                            carShop={carShop}
                            total={total}
                            currency={currency}
                            setViewModal={setViewModal}
                            setCarShop={setCarShop}
                        />
                    </div>
                }
            </div>
            {
                alert.status &&
                <Alert
                    message={alert.message}
                    color={alert.color}
                    setAlert={setAlert}
                />
            }
        </Fragment>
    )

}
export default Home;
