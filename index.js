const DiscordJS = require('discord.js')
const client = DiscordJS.Client()
client.on('ready', () => {
    console.log('起動完了')
})
client.login('')
