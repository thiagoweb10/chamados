import { defineStore } from 'pinia'
import { getAuthenticate, getMe } from '@/api/AuthApi.js'

export const useAuthStore = defineStore('auth', {
    
    state: () => ({
        user: null,
        token: localStorage.getItem('app-helpdesk') || null,
    }),

    actions: {
        initialize() {
            this.token = localStorage.getItem('app-helpdesk');
        },
        async login(credentials){

            try {
                const response = await getAuthenticate(credentials)

                this.token = response.data.data.token
                this.user  = response.data.data.user
                
                localStorage.setItem('app-helpdesk', this.token)

            } catch (error) {
                throw error
            }
        },

        async fetchUser(){
            if (!this.token) {
                return
            }

            try {
                
                const response = await getMe()
                this.user = response.data.data
                console.log('data',response.data)
                console.log('user',this.user)
            } catch (e) {
                console.error(e)
                this.logout()
            }
        },

        logout() {
            this.user = null
            this.token = null
            localStorage.removeItem('app-helpdesk')
        },

    }
})