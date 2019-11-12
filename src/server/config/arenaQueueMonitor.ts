import Arena from 'bull-arena'

// eslint-disable-next-line new-cap
export const arena = Arena(
    {
        queues: [
            {
                name: 'emailQueue',
                hostId: '@licialonso',
                redis: { url: process.env.REDIS_URL as string }
            }
        ]
    },
    {
        disableListen: process.env.NODE_ENV === 'production' ? false : true
    }
)
