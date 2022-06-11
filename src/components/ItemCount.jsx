import React, { useState } from "react"
import { useAppContext } from "../context/AppContext"
import { useCartContext } from "../context/CartContext"
import { getItemByID } from "../firebase"



const ItemCount = ({ stock, onAdd, id }) => {
	const [count, setCount] = useState(0)

	const { addToCart } = useCartContext()
	const { items } = useAppContext()

	const handleAdd = () => {
		if (count < stock) {
			setCount(count + 1)
		}
	}
	const handleRemove = () => {
		if (count > 0) {
			setCount(count - 1)
		}
	}

	const handleClick = async (id, cantidad) => {
		const findProduct = await getItemByID(id)

		if (!findProduct) {
			alert("Error en la base de datos")
			return
		}

		addToCart(findProduct, cantidad);
		onAdd(count)
	}

	return (
		<>
			<div className="flex gap-4 mt-4">
				<div className="flex flex-row">
					<button className="btn " onClick={handleRemove}>-
						
					</button>
					<label className="alert alert-white">{count}</label>
					<button className="btn " onClick={handleAdd}>+
						
					</button>
				</div>
				<div>
					<button
						className="btn bg-primary text-white btn-block "
						onClick={() => handleClick(id, count)}
					>
						Agregar al Carrito
					</button>
				</div>
			</div>
		</>
	)
}

export default ItemCount