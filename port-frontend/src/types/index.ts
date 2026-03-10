export interface Group {
  id: string;
  name: string;
  description: string;
}

export interface Message {
  id: string;
  groupId: string;
  senderName: string;
  content: string;
  timestamp: string;
}
