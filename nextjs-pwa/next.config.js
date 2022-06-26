/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

module.exports =
    withPWA({
        pwa: {
            dest: 'public',
            runtimeCaching,
        },
        async rewrites() {
            return [
                {
                    source: '/service/:prefix*',
                    destination: `http://0.0.0.0:8080/service/:prefix*`,
                }
            ]
        }
    })
