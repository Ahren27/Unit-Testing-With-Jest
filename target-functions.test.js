const myFunctions = require('./target-functions.js');

const portfolio = new myFunctions.StockPortfolio();

test('Testing addStock -- success', () => {
    portfolio.addStock('AAPL', 30);
    const result = 30;
    const target = portfolio.getShares('AAPL');
    expect(target).toBe(result);
});

test('Testing addStock -- success', () => {
    portfolio.addStock('GE', 30);
    portfolio.addStock('AAPL', 15);
    portfolio.addStock('GE', 30);
    const result = 60;
    const target = portfolio.getShares('GE');
    expect(target).toBe(result);
});

test('Testing getShares -- success', () => {
    portfolio.addStock('ZOOM', 100);
    const result = 100;
    const target = portfolio.getShares('ZOOM');
    expect(target).toBe(result);
});

test('Testing checkIsEmpty true -- success', () => {
    const result = true;
    const target = portfolio.checkIsEmpty('GOOG');
    expect(target).toBe(result);
});

test('Testing checkIsEmpty false -- success', () => {
    const result = false;
    const target = portfolio.checkIsEmpty('GE');
    expect(target).toBe(result);
});

test('Testing sellStock -- success', () => {
    portfolio.sellStock('ZOOM', 100);
    const result = true;
    const target = portfolio.checkIsEmpty('ZOOM');
    expect(target).toBe(result);
});

test('Testing getSymbolCount -- success', () => {
    const result = 2;
    const target = portfolio.getSymbolCount();
    expect(target).toBe(result);
});

test('Testing sellStock -- success', () => {
    portfolio.addStock('AAPL', 30);
    portfolio.sellStock('AAPL', 35);
    const result = 40;
    const target = portfolio.getShares('AAPL');
    expect(target).toBe(result);
});