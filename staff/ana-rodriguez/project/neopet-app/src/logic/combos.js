function getListas(nombreLista, callback, queryString){
    const xhr = new XMLHttpRequest;

    let url = '/lista/'+ nombreLista;
    url += queryString ? queryString : '';

    xhr.onload = function () {
        const {status, responseText} = xhr 

        if(status === 400) callback(new Error ('wrong credential'))
        else if(status === 401) callback(new Error ('username and/or password wrong'))
        else if(status === 404) callback(new Error('page not found'))
        else if(status === 200) callback(null,JSON.parse(responseText)) 
    };

    xhr.open ('GET', url);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send();
}

export const getEspecies = function (callback){
    getListas('especies',callback);
}

export const getRazaById = function (id, callback){
    const queryString = '?especie='+id;
    getListas ('razas', callback, queryString);
}

export const getGenero = function (callback){
    getListas ('genero',callback);
}

