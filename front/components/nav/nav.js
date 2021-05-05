import React from 'react'

const Nav = ({ carShop=[], setCurrency, setViewCar, viewCar,setAlert}) => {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    
    const ChangeCurrency = (corrency) => {
        setCurrency(corrency);
    }
    const viewCarShop = (status) => {
        if(carShop.length > 0){
            setViewCar(!status);
        }else{
            setAlert({message:"No hay productos en el carrito",status:true,color:'bg-red-500'});

        }
    }
    return (
        <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-gray-900 mb-3">
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                    <a
                        href="/#"
                        className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
                    >
                        Xcaret
                    </a>
                    <button
                        className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                        type="button"
                        onClick={() => setNavbarOpen(!navbarOpen)}
                    >
                        <i className="fas fa-bars"></i>
                    </button>
                </div>
                <div
                    className={
                        "lg:flex flex-grow items-center" +
                        (navbarOpen ? " flex" : " hidden")
                    }
                    id="example-navbar-danger"
                >
                    <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                        <li className="nav-item">
                            <a
                                href="#"
                                className="cursor-pointer px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                onClick={() => ChangeCurrency('usd')}
                            >
                                <i className="fas fa-dollar-sign text-lg leading-lg text-white opacity-75"></i><span className="ml-2">USD</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                href="#"
                                className="cursor-pointer px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                onClick={() => ChangeCurrency('mxn')}
                            >
                                <i className="fas fa-money-bill-wave-alt text-lg leading-lg text-white opacity-75"></i><span className="ml-2">MXN</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                href="#"
                                className="cursor-pointer px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                onClick={() => viewCarShop(viewCar)}
                            >
                                <i className="fas fa-cart-plus text-lg leading-lg text-white opacity-75"></i><span className="ml-2">{`( ${carShop.length} )`}</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Nav;
