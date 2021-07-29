import * as types from "./actionTypes";
import firebaseDb from "../firebase";
import { Contacts } from "@material-ui/icons";



const getContactsStart = () => ({
    type: types.GET_CONTACTS_START,
});

const getContatsSuccess = () => ({
    type: types.GET_CONTACTS_SUCCESS,
    payload: Contacts,
});

const getContactsFail = () => ({
    type: types.GET_CONTACTS_FAIL,
});

const deleteContactStart = () => ({
    type: types.DELETE_CONTACT_START,
});

const deleteContactSuccess = () => ({
    type: types.DELETE_CONTACT_SUCCESS,
});

const deleteContactFail = () => ({
    type: types.DELETE_CONTACT_FAIL,
});

const addContactStart = () => ({
    type: types.ADD_CONTACT_START,
});

const addContactSuccess = () => ({
    type: types.ADD_CONTACT_SUCCESS,
});

const addContactFail = () => ({
    type: types.ADD_CONTACT_FAIL,
});

const editContactStart = () => ({
    type: types.EDIT_CONTACT_START,
});

const editContactSuccess = () => ({
    type: types.EDIT_CONTACT_SUCCESS,
});

const editContactFail = () => ({
    type: types.EDIT_CONTACT_FAIL,
});
export const getContacts = () => {
    return function(dispatch) {
        dispatch(getContactsStart());
        firebaseDb.child("contacts").on("value", (snapshot) => {
           try {
            if (snapshot.val() !== null) {
                dispatch(getContatsSuccess)(snapshot.val());
            } else {
             
                dispatch(getContatsSuccess({}));
            } 
        } catch (error) {
            dispatch(getContactsFail(error));
        }
          });
    };
};

export const addContact = (contact) => {
    return function (dispatch) {
        dispatch(addContactStart());
        firebaseDb.child("contacts").push(contact, (err) => {
            dispatch(addContactSuccess());
            if (err) {
                dispatch(addContactFail(err));
            }
        });
    };
};

export const editContact = (contact, id) => {
    return function (dispatch) {
        dispatch(editContactStart());
        firebaseDb.child(`contacts/${id}`).set(contact, (err) => {
            dispatch(editContactSuccess());
            if (err) {
              dispatch(editContactFail(err));
            }
          });
        
    };
}
export const deleteContact = (id) => {

    return function (dispatch) {
        dispatch(deleteContactStart());
        firebaseDb.child(`contacts/${id}`).remove((err) => {
            dispatch(deleteContactSuccess());
            if (err) {
              dispatch(deleteContactFail(err));
            }
          });
        
    };
}