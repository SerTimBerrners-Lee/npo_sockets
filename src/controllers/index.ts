import { chatMessageSchema, userConnectedSchema, userDisconnectedSchema, userMessageSchema } from "../wsapi/schemas";

export class ControllerIndex {
  userMessage() {
    wsx.clientMessage({ type: "user:message" }, userMessageSchema, (client: any, data: any) => {
      wsx.clients.forEach((c: any) => {
        if (c === client) return false;
        c.send({ 
          type: "chat:message",
          userId: client.state.userId,
          text: data.text
        });
      });
    });
  }
  
  chatMessage() {
    wsx.serverMessage({ type: "chat:message" }, chatMessageSchema);
  }
  
  userConnected() {
    wsx.serverMessage({ type: "user:connected" }, userConnectedSchema);
  }
  
  userDisconnected() {
    wsx.serverMessage({ type: "user:disconnected" }, userDisconnectedSchema);
  }
  
}

