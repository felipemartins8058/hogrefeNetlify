import { defineStore } from 'pinia'
import axios from 'axios'
import Cookies from 'js-cookie'

axios.defaults.baseURL = 'http://localhost:3000/';
let accessToken = () => (
    Cookies.get('access_token') ? Cookies.get('access_token') : 'empty token'
)

export const useMapaStore = defineStore("mapa",{
    state: () => ({
        listMapasData: [],
        listMapasPagination: {},
        loadingMapasData: false,
        listMapasDataError: null,

        mapaData: {},
        loadingMapaData: false,
        mapaDataError: null,
    }),
    persist: true,
    getters: {
        getListMapasDataState: (state) => state.listMapasData,
        getListMapasPaginationState: (state) => state.listMapasPagination,
        getLoadingMapasDataState: (state) => state.loadingMapasData,
        getListMapasDataErrorState: (state) => state.listMapasDataError,

        getMapaDataState: (state) => state.mapaData,
        getLoadingMapaDataState: (state) => state.loadingMapaData,
        getMapaDataErrorState: (state) => state.mapaDataError,
    },
    actions: {
        /*--------------------------------
        |GET LIST MAPAS
        ---------------------------------*/
        async getListMapasData(payload){
            this.loadingMapasData = true
            try {
                const response = await axios.get('mapas')
                this.listMapasData = response.data
                this.listMapasPagination = response.data.meta
                this.listMapasDataError = null
            } catch (error) {
                console.log("stores::mapa::GET LIST MAPAS", error)
                this.listMapasDataError = error
                this.listMapasData = []
                this.listMapasPagination = {}
            } finally {
                this.loadingMapasData = false
            }
        },

        /*--------------------------------
        |GET MAPA
        ---------------------------------*/
        async getMapaData(payload) {
            this.loadingMapaData = true
            console.log("stores::mapa::GET MAPA", payload.mapaId)
            try {
                const response = await axios.get(`mapas/${payload.mapaId}`)
                console.log("stores::mapa::GET MAPA", response.data)
                this.mapaData = response.data
                this.mapaDataError = null
            } catch (error) {
                console.log("stores::mapa::GET MAPA", error)
                this.mapaDataError = error
                this.mapaData = {}
            } finally {
                this.loadingMapaData = false
            }
        }
    }
})