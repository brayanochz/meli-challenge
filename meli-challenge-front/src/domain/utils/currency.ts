function getCurrencySymbol (locale: string, currency: string) {
    console.log(locale,currency)
    return (0).toLocaleString(
      locale,
      {
        style: 'currency',
        currency: currency,
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      }
    ).replace(/\d/g, '').trim()
}

export { getCurrencySymbol }