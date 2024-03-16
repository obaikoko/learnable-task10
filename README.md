Hotel Management API

This is a backend API for a hotel management system built using Node.js, Express.js, and MongoDB. It provides endpoints to manage room types and rooms, allowing users to create, retrieve, update, and delete data.

Endpoints

Room Types

POST /api/v1/rooms-types: Create a new room type.
GET /api/v1/rooms-types: Get all room types.

Rooms

POST /api/v1/rooms: Create a new room.
GET /api/v1/rooms: Get all rooms with optional filters.
PATCH /api/v1/rooms/:roomId: Update a room by ID.
DELETE /api/v1/rooms/:roomId: Delete a room by ID.
GET /api/v1/rooms/:roomId: Get a room by ID.
Optional Queries
You can use the following optional queries when fetching rooms:

search: Search for rooms by name.
roomType: Filter rooms by room type ID.
minPrice: Filter rooms with a minimum price.
maxPrice: Filter rooms with a maximum price.