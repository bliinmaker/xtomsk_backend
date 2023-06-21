import Order from '../models/order.model.js'

export const findAll = async (title) => {
    const orders = await Order.find(title)

    return orders
}

export const findById = async (id) => {
    const order = await Order.findById(id)

    return order
}