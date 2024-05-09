import { defineStore } from "pinia";
import axios from "axios";
import Cookies from "js-cookie";

axios.defaults.baseURL = "https://json-server-vercel-p94hxtqq8-projeto-inclusao.vercel.app/";
let accessToken = () => (
    Cookies.get('access_token') ? Cookies.get('access_token') : 'empty token'
)

export const usePatientStore = defineStore("patient", {
    state: () => ({
        listPatientsData: [],
        listPatientsPagination: {},
        loadingPatientsData: false,
        listPatientsDataError: null,

        patientData: {},
        loadingPatientData: false,
        patientDataError: null,
    }),
    persist: true,
    getters: {
        getListPatientsDataState: (state) => state.listPatientsData,
        getListPatientsPaginationState: (state) => state.listPatientsPagination,
        getLoadingPatientsDataState: (state) => state.loadingPatientsData,
        getListPatientsDataErrorState: (state) => state.listPatientsDataError,

        getPatientDataState: (state) => state.patientData,
        getLoadingPatientDataState: (state) => state.loadingPatientData,
        getPatientDataErrorState: (state) => state.patientDataError,
    },
    actions: {
        /*--------------------------------
        |GET LIST PATIENTS
        ---------------------------------*/
        async getListPatientsData(payload){
            this.loadingPatientsData = true
            try {
                const response = await axios.get('pacientes')
                console.log("stores::patient::GET LIST PATIENTS", response)
                this.listPatientsData = response.data
                this.listPatientsDataError = null
            } catch (error) {
                console.log("stores::patient::GET LIST PATIENTS", error)
                this.listPatientsDataError = error
                this.listPatientsData = []
                this.listPatientsPagination = {}
            } finally {
                this.loadingPatientsData = false
            }
        },

        /*--------------------------------
        |CREATE PATIENT
        ---------------------------------*/
        async createPatient(payload){
            console.log("stores::patient::CREATE PATIENT", JSON.stringify(payload))
            try {
                const response = await axios.post('pacientes', JSON.stringify(payload))
                this.listPatientsData.push(response.data)
                this.listPatientsDataError = null
            } catch (error) {
                console.log("stores::patient::CREATE PATIENT", error)
                this.listPatientsDataError = error
            }
        },

        /*--------------------------------
        |GET PATIENT
        ---------------------------------*/
        async getPatientData(payload) {
            this.loadingPatientData = true
            console.log("stores::patient::GET PATIENT", payload.patientId)
            try {
                const response = await axios.get(`pacientes/${payload.patientId}`)
                this.patientData = response.data
                this.patientDataError = null
            } catch (error) {
                console.log("stores::patient::GET PATIENT", error)
                this.patientDataError = error
                this.patientData = {}
            } finally {
                this.loadingPatientData = false
            }
        }
    }
    
})