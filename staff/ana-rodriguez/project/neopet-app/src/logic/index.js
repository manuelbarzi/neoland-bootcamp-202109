import registerUser from './registerUser';
import authUser from './authUser';
import retrieveUser from './retrieveUser';
import changePass from './changePass';
import unregisterUser from './unregister';
import registerClient from './registerClient';
import registerPet from './registerPet';
import registerUserClient from './registerUserClient';
import searchClients from './searchClients';
import searchPets from './searchPets';
import modifyClient from './modifyClient';

import registerDeparasite from './filePet/registerDeparasite';
import registerNotes from './filePet/registerNotes';
import registerVaccine from './filePet/registerVaccine';
import registerWeight from './filePet/registerWeight';

import deletePet from './filePet/deletePet';
import deleteDeparasites from './filePet/deleteDeparasites';
import deleteNotes from './filePet/deleteNotes';
import deleteVaccines from './filePet/deleteVaccines';
import deleteWeights from './filePet/deleteWeights';
import deleteClient from './filePet/deleteClient';

import getVaccines from './filePet/getVaccines';
import getDeparasite from './filePet/getDeparasite';
import getWeight from './filePet/getWeigth';
import getNotes from './filePet/getNotes';

// import search from './search'
// import retrieveSearch from './retrieve-search'

export {
    registerUser,
    authUser,
    retrieveUser,
    changePass,
    unregisterUser,
    registerClient,
    registerPet,
    registerUserClient,
    searchClients,
    searchPets,
    modifyClient,
    registerDeparasite,
    registerNotes,
    registerVaccine,
    registerWeight,
    deletePet,
    deleteDeparasites,
    deleteNotes,
    deleteVaccines,
    deleteWeights,
    deleteClient,
    getDeparasite,
    getNotes,
    getVaccines,
    getWeight
}