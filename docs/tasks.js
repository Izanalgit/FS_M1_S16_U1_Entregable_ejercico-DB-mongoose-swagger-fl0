module.exports = {
    paths: {
      "/create": {
        post: {
          tags: {
            Users: "Create a new task",
          },
          description: "Create Task",
          operationId: "createTask",
          parameters: [],
          requestBody: {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Task",
                },
              },
            },
          },
          responses: {
            201: {
              description: "Task created successfully",
            },
            500: {
              description: "Server error",
            },
          },
        }
      },
      "/id/{_id}": {
        put: {
          tags: {
            Tasks: "Update a task",
          },
          description: "Update Task",
          operationId: "updateTask",
          parameters: [
            {
              name: "_id",
              in: "path",
              schema: {
                $ref: "#/components/schemas/_id",
              },
              description: "Id of Task to be updated",
            },
          ],
          requestBody: {
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/Task/properties/title" },
              },
            },
          },
          responses: {
            200: { description: "Task updated successfully" },
            500: { description: "Server error" },
          },
        },
        delete: {
            tags: {
              Tasks: "Delete a task",
            },
            description: "Delete Task",
            operationId: "deleteTask",
            parameters: [
              {
                name: "_id",
                in: "path",
                schema: {
                  $ref: "#/components/schemas/_id",
                },
                description: "Id of Task to be deleted",
              },
            ],
            requestBody: {},
            responses: {
              200: { description: "Task deleted successfully" },
              500: { description: "Server error" },
            },
          },
      },
      "/": {
        get: {
          tags: {
            Tasks: "See all tasks",
          },
          description: "Get all the Tasks and reed them",
          operationId: "readAllTask",
          parameters: [],
          requestBody: {},
          responses: {
            200: { description: "Tasks readed successfully" },
            500: { description: "Server error" },
          },
        },
      },
    },  
  };
  