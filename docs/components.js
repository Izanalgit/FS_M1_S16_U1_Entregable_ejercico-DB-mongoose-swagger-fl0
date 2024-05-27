module.exports = {
    components:{
        schemas:{
            Task:{
                type:'object',
                properties:{
                    _id:{
                        type:'objectId',
                        description:"Task identification number",
                        example:"6301064b0028de7866e2b2c4"
                    },
                    title:{
                        type:'string',
                        description:"task name to register",
                        example:"Push the commit"
                    },
                    completed:{
                        type:'boolean',
                        description:"task status to register",
                        example:false
                    },
                }
            },
            _id:{
                type:'objectId',
                description:"An id of a task",
                example: "6301064b0028de7866e2b2c4"
            },
        }
    }
}
