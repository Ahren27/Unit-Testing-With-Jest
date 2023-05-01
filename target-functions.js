class StockPortfolio {
    constructor() {
        this.portfolio = {};
    }

    addStock(symbol, shares) {
        if (symbol in this.portfolio) {
            this.portfolio[symbol] += shares;
        } else {
            this.portfolio[symbol] = shares;
        }
    }

    checkIsEmpty(symbol) {
        if (symbol in this.portfolio) {
            return false;
        } else {
            return true;
        }
    }

    getSymbolCount() {
        return Object.keys(this.portfolio).length;
    }    

    sellStock(symbol, shares) {
        if (symbol in this.portfolio) {
            if (shares == this.portfolio[symbol]) {
                delete this.portfolio[symbol];
            } 
            else if (shares >= this.portfolio[symbol]) {
                throw new ShareSaleException(`Selling too many shares of ${symbol}`);
            } 
            else {
                this.portfolio[symbol] -= shares;
            }
        }
    }

    getShares(symbol) {
        return this.portfolio[symbol];
    }
}

class ShareSaleException extends Error {
    constructor(message) {
        super(message);
        this.name = 'ShareSaleException';
    }
}  

exports.StockPortfolio = StockPortfolio;
exports.ShareSaleException = ShareSaleException;