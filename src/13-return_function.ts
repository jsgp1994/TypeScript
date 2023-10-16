( () => {

    const totNumber = ( prices: number[] ): string => {
        let tot: number = 0
        prices.forEach( (data) => {
            tot += data
        } )
        return tot.toString()
    }

    const printTot = ( prices: number[] ): void => {
        const rta = totNumber(prices)
        console.log(`El total de los productos es ${rta}`)
    }

    printTot( [10, 20, 30, 40] )


} )()