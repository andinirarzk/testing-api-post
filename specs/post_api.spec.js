import * as chai from "chai"
import chaiJsonSchemaAjv from "chai-json-schema-ajv"
import supertest from "supertest"

import postSchema from '../schemas/post_schema.js'
import allPostSchema from "../schemas/posts_schema.js"
import searchSchema from "../schemas/search_schema.js"
import limitSkipSchema from "../schemas/limitskip_schema.js"
import commentsSchema  from "../schemas/comment_schema.js"
import deleteSchema from "../schemas/delete_schema.js"

chai.use(chaiJsonSchemaAjv)

const { expect } = chai
const request = supertest('https://dummyjson.com')

describe("API Testing Posts", () => {

    it('Get a All Post', async function () {
        const res = await request.get('/posts')
        expect(res.body).to.be.jsonSchema(allPostSchema)
    })

    it('Get a Single Post', async function () {
        const res = await request.get('/posts/14')
        expect(res.body).to.be.jsonSchema(postSchema)
    })

    it('Get a Search Post', async function () {
        const res = await request.get('/posts/search?q=secrets')
        expect(res.body).to.be.jsonSchema(searchSchema)
    })


    it('Limit and Skip Post', async function () {
        const res = await request.get('/posts/posts?limit=10&skip=10&select=title,reactions,userId')
        expect(res.body).to.be.jsonSchema(limitSkipSchema)
    })

    it('Get all Post by User ID', async function () {
        const res = await request.get('/posts/user/5')
        expect(res.body).to.be.jsonSchema(postSchema)
    })

    it('Get Post is Comments', async function () {
        const res = await request.get('/posts/1/comments')
        expect(res.body).to.be.jsonSchema(commentsSchema)
    })

    it('Add a New Post', async function () {
        const addPost = {
            id : 14,
            title: 'Hello',
            userId: 4
        }

        const res = await request.post("/posts/add").send(addPost)
        expect(res.body).to.be.jsonSchema(postSchema)
    })

    it('Update a Post', async function () {
        const updatePost = {
            tags: [
                "comedy",
                "english",
                "love"
            ]
        }

        const res = await request.put("/posts/2").send(updatePost)
        expect(res.body).to.be.jsonSchema(postSchema)
    })

    it('Delete a Post', async function () {
        const res = await request.delete('/posts/3')
        expect(res.body).to.be.jsonSchema(deleteSchema)
    })
})