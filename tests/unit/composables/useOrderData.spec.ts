import { Order, OrderItem } from '@vue-storefront/bigcommerce-api';
import { useOrderData } from '../../../composables/useOrderData';
import { mockedOrder } from '../../__mocks__/order.mock';
import { mockedOrderItem } from '../../__mocks__/orderItem.mock';
import { expect } from '@jest/globals';

jest.mock('../../../composables/useUiHelpers', () => {
  return jest.fn().mockImplementation(() => ({
    formatDateString: (date) => date
  }));
});

describe('[bigcommerce-theme] useOrderData', () => {
  const orderData = useOrderData();

  it('getDate should return the formatted creation date of the order', () => {
    expect(orderData.getDate(mockedOrder as Order)).toEqual(
      mockedOrder.date_created
    );
  });

  it('getDate should return empty string when order is not defined', () => {
    expect(orderData.getDate(undefined)).toEqual('');
  });

  it('getId should return the id of the order', () => {
    expect(orderData.getId(mockedOrder as Order)).toEqual(
      mockedOrder.id.toString()
    );
  });

  it('getId should return empty string when order is not defined', () => {
    expect(orderData.getId(undefined)).toEqual('');
  });

  it('getStatus should return the status of the order', () => {
    expect(orderData.getStatus(mockedOrder as Order)).toEqual(
      mockedOrder.status
    );
  });

  it('getStatus should return empty string when order is not defined', () => {
    expect(orderData.getStatus(undefined)).toEqual('');
  });

  it('getPrice should return the total price', async () => {
    expect(orderData.getPrice(mockedOrder as Order)).toEqual(
      parseFloat(mockedOrder.total_inc_tax)
    );
  });

  it('getPrice should return null when order is not defined', () => {
    expect(orderData.getPrice(undefined)).toEqual(null);
  });

  it('getItemSku should return the sku of the order item', () => {
    expect(orderData.getItemSku(mockedOrderItem as OrderItem)).toEqual(
      mockedOrderItem.sku
    );
  });

  it('getItemSku should return empty string when the item is not defined', () => {
    expect(orderData.getItemSku(undefined)).toEqual('');
  });

  it('getItemName should return the name of the order item', () => {
    expect(orderData.getItemName(mockedOrderItem as OrderItem)).toEqual(
      mockedOrderItem.name
    );
  });

  it('getItemName should return empty string when the item is not defined', () => {
    expect(orderData.getItemName(undefined)).toEqual('');
  });

  it('getItemQty should return the quantity of the order item', () => {
    expect(orderData.getItemQty(mockedOrderItem as OrderItem)).toEqual(
      mockedOrderItem.quantity
    );
  });

  it('getItemQty should return 0 when the item is not defined', () => {
    expect(orderData.getItemQty(undefined)).toEqual(0);
  });

  it('getItemPrice should return the price of the order item', () => {
    expect(orderData.getItemPrice(mockedOrderItem as OrderItem)).toEqual(
      parseFloat(mockedOrderItem.price_inc_tax)
    );
  });

  it('getItemPrice should return 0 when the item is not defined', () => {
    expect(orderData.getItemPrice(undefined)).toEqual(0);
  });

  it('getItemAttributes should return the attributes of the item', () => {
    expect(orderData.getItemAttributes(mockedOrderItem as OrderItem)).toEqual({
      Color: 'Silver',
      Size: 'Small'
    });
  });

  it('getItemAttributes should return empty object when the item is not defined', () => {
    expect(orderData.getItemAttributes(undefined)).toEqual({});
  });

  it('getOrdersTotal should return the number of the orders in a list', () => {
    expect(
      orderData.getOrdersTotal({
        results: [mockedOrder, mockedOrder] as Order[],
        total: 2
      })
    ).toEqual(2);
  });

  it('getOrdersTotal should return 0 when no input given', () => {
    expect(orderData.getOrdersTotal(undefined)).toEqual(0);
  });
});
