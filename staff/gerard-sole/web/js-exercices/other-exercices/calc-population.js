const calcPopulation = (natalidad, inmigracion, mortalidad, ayosEstimados, poblacionActual) => {
    var nuevaPoblacion = poblacionActual;
    for (var i = 0; i < ayosEstimados; i++) {
        nuevaPoblacion += (nuevaPoblacion * natalidad / 100);
        nuevaPoblacion += inmigracion;
        nuevaPoblacion -= mortalidad;   
    }
    return Math.round(nuevaPoblacion);
}