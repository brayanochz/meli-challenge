import getSymbolFromCurrency from "currency-symbol-map"

const getCurrencySymbol = (currency: string): string => {
    return getSymbolFromCurrency(currency) || '$'
}

export {
    getCurrencySymbol,
}