import { Type } from "@sinclair/typebox";

export const userMessageSchema = {
  $id: "user:message",
  description: "New user message",
  payload: Type.Strict(Type.Object({
    type: Type.String({ const: "user:message", description: "Message type" }),
    text: Type.String({ description: "Message text" })
  }, { $id: "user:message" }))
}

// New chat message schema
export const chatMessageSchema = {
  $id: "chat:message",
  description: "New message in chat",
  payload: Type.Strict(Type.Object({
    type: Type.String({ const: "chat:message", description: "Message type" }),
    userId: Type.String({ description: "User Id" }),
    text: Type.String({ description: "Message text" })
  }, { $id: "chat:message" }))
}

// User disconnect message schema
export const userDisconnectedSchema = {
  $id: "user:disconnected",
  description: "User online status update",
  payload: Type.Strict(Type.Object({
    type: Type.String({ const: "user:disconnected", description: "Message type" }),
    userId: Type.String({ description: "User Id" }),
    name: Type.String({ description: "User name" }),
  }, { $id: "user:disconnected" }))
}

// User connect message schema
export const userConnectedSchema = {
  $id: "user:connected",
  description: "User online status update",
  payload: Type.Strict(Type.Object({
    type: Type.String({ const: "user:connected", description: "Message type" }),
    userId: Type.String({ description: "User id" }),
    name: Type.String({ description: "User name" }),
  }, { $id: "user:connected" }))
}