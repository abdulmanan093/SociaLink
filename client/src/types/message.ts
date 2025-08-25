export type Message = {
  id: string;
  senderId: string;
  senderUserName: string;
  senderImageUrl: string;
  recipientId: string;
  recipientUserName: string;
  recipientImageUrl: string;
  content: string;
  dateRead?: string;
  messageSent: string;
  currentUserSender?: boolean;
};
