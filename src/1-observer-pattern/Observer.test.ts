import { Order } from './order/Order'
import { OrderStatus } from './order/OrderStatus'
import { Email } from './notification/Email'
import { MobileApp } from './notification/MobileApp'
import { TextMessage } from './notification/TextMessage'

describe('Observer', () => {
  it('Runs Correctly', () => {
    const order = new Order(1234, OrderStatus.ZAREJESTROWANE)
    order.addObserver(new Email())
    order.addObserver(new MobileApp())
    order.addObserver(new TextMessage())

    order.setOrderStatus(OrderStatus.WYSLANE)
    order.setOrderStatus(OrderStatus.ODEBRANE)
  })

  it('Runs Correctly', () => {
    const order = new Order(3123, OrderStatus.ZAREJESTROWANE)
    order.addObserver(new MobileApp())

    order.setOrderStatus(OrderStatus.WYSLANE)
  })
})
