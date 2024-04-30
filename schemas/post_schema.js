const SinglePostSchema = {

    //object pasti ada properties
        type: 'object',
        properties: {
            id: { type: 'number' },
            title: { type: 'string' },
            body: { type: 'string' },
            userId: { type: 'number' },
            tags: {
                type: 'array',
    
                // items punyanya array
                items: {
                    type: 'string'
                }
            },
            reactions: { type: 'number' }
        },
        // // bisa object atau array
        // required: ['id', 'title', 'body', 'userId', 'tags']
    }
    
    export default SinglePostSchema