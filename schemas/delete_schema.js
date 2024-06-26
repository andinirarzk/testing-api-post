const DeleteSchema = {
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
        reactions: { type: 'number' },
        isDeleted: { type: 'boolean' },
        deletedOn: { type: 'string' }
    }
}

export default DeleteSchema