import { defineStore } from 'pinia'

export const useUsers = defineStore('users', {
  state: () => ({
    users: null,
  }),

  actions: {
    async getUsers() {
      try {
         let rawData = await fetch('https://jsonplaceholder.typicode.com/users')
         this.users = await rawData.json()
      } catch (error) {or
        return error
      }
    },
  },
})